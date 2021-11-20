import { Component, OnDestroy, OnInit } from '@angular/core';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { UserInterface } from '@shared/interfaces/user.interface';
import { LoginService } from '@core/services/login.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '@core/services/users.service';
import { CollectionsService } from '@core/services/collections.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { OptionalService } from '@core/services/optional.service';

@Component({
  selector: 'app-collection-editing-page',
  templateUrl: './collection-editing-page.component.html',
  styleUrls: ['./collection-editing-page.component.scss'],
})
export class CollectionEditingPageComponent implements OnInit, OnDestroy {
  collection!: CollectionInterface;
  user!: UserInterface;
  updateCollectionsSubscription!: Subscription;

  constructor(
    public loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private collectionsService: CollectionsService,
    private optionalService: OptionalService
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.user = data.user;

      this.collection = this.optionalService.addOptionalField(
        data.collection,
        true,
        false
      );

      this.updateCollectionsSubscription =
        this.collectionsService.updaterCollections$.subscribe(() => {
          this.collectionsService
            .getCollectionById(this.collection.id)
            .pipe(
              map((response) => {
                return response.msg;
              })
            )
            .subscribe((collection) => {
              this.collection = this.optionalService.addOptionalField(
                collection,
                true,
                false
              );
            });
        });
    });
  }

  ngOnDestroy() {
    this.updateCollectionsSubscription.unsubscribe();
  }
}
