import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserInterface } from '@shared/interfaces/user.interface';
import { UsersService } from '@core/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { CollectionsService } from '@core/services/collections.service';
import { CollectionFilterInterface } from '@shared/interfaces/collection-filter.interface';
import { RightsService } from '@core/services/rights.service';
import { Subscription } from 'rxjs';
import { LoginService } from '@core/services/login.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit, OnDestroy {
  user!: UserInterface;
  collections: CollectionInterface[] = [];
  filter: CollectionFilterInterface = {
    label: 'Find collection',
    field: 'name',
    ignoreCase: true,
  };
  isMyPage = false;
  collectionsUpdateSubscription: Subscription = new Subscription();

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private collectionsService: CollectionsService,
    private rightsService: RightsService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          setTimeout(() => {
            this.isMyPage = this.loginService.user.id === params.id;
          }, 0);

          return this.usersService.getUserById(+params.id);
        }),
        map((resp) => resp.msg),
        switchMap((user) => {
          this.user = user;

          this.collectionsUpdateSubscription =
            this.collectionsService.updaterCollections$.subscribe(() => {
              this.collectionsService
                .getUserCollections(user.id)
                .pipe(map((resp) => resp.msg))
                .subscribe((collections) => {
                  this.collections = this.modifyCollections(collections);
                });
            });

          return this.collectionsService.getUserCollections(user.id);
        }),
        map((resp) => resp.msg),
        map((collections) => {
          return this.modifyCollections(collections);
        })
      )
      .subscribe((collections) => {
        this.collections = collections;
      });
  }

  private modifyCollections(
    collections: CollectionInterface[]
  ): CollectionInterface[] {
    return collections.map((collection: CollectionInterface) => {
      return Object.assign(collection, {
        isViewable: true,
        isChangeable: this.rightsService.isAdmin || this.isMyPage,
        isRemovable: this.rightsService.isAdmin || this.isMyPage,
      });
    });
  }

  ngOnDestroy() {
    this.collectionsUpdateSubscription.unsubscribe();
  }
}
