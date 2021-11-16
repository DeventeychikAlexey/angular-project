import { Component, OnDestroy, OnInit } from '@angular/core';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { UserInterface } from '@shared/interfaces/user.interface';
import { LoginService } from '@core/services/login.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '@core/services/users.service';
import { CollectionsService } from '@core/services/collections.service';
import { map, switchMap } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
import { RightsService } from '@core/services/rights.service';

@Component({
  selector: 'app-collection-editing-page',
  templateUrl: './collection-editing-page.component.html',
  styleUrls: ['./collection-editing-page.component.scss'],
})
export class CollectionEditingPageComponent implements OnInit, OnDestroy {
  collection!: CollectionInterface;
  user!: UserInterface;
  initializeSubscription!: Subscription;

  constructor(
    public loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private collectionsService: CollectionsService,
    private rightsService: RightsService
  ) {}

  private initialize() {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          return this.collectionsService.getCollectionById(params.id);
        }),
        map((resp) => resp.msg),
        map((collection) =>
          Object.assign(collection, {
            isViewable: true,
          })
        ),
        switchMap((collection) => {
          this.collection = collection;

          return this.usersService.getUserById(collection.id_user);
        }),
        map((resp) => resp.msg),
        switchMap((user) => {
          this.user = user;

          let isMyCollection = false;

          if (this.user.id === this.loginService.user.id) {
            isMyCollection = true;
          }

          this.collection = Object.assign(this.collection, {
            isRemovable: this.rightsService.isAdmin || isMyCollection,
          });

          return of();
        })
      )
      .subscribe();
  }

  ngOnInit() {
    this.initializeSubscription =
      this.collectionsService.updaterCollections$.subscribe(() => {
        this.initialize();
      });

    this.collectionsService.updaterCollections$.next();
  }

  ngOnDestroy() {
    this.initializeSubscription.unsubscribe();
  }
}
