import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface } from '../interfaces/user.interface';
import { CollectionInterface } from '../collection/interfaces/collection.interface';
import { FilterInterface } from '../interfaces/filter.interface';
import { UsersService } from '../user-header/services/users.service';
import { OptionalService } from '../services/optional.service';
import { CollectionsRequestService } from '../collections/services/collections-request.service';
import { CollectionsService } from '../collections/services/collections.service';

@Component({
  selector: 'app-page',
  templateUrl: './user-feature.component.html',
  styleUrls: ['./user-feature.component.scss'],
})
export class UserFeatureComponent implements OnInit, OnDestroy {
  user!: UserInterface;
  collections: CollectionInterface[] = [];
  filter: FilterInterface = {
    label: 'Find collection',
    field: 'name',
    ignoreCase: true,
  };
  collectionsUpdateSubscription: Subscription = new Subscription();

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private collectionsService: CollectionsService,
    private collectionsRequestService: CollectionsRequestService,
    private optionalService: OptionalService
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((response) => {
      this.user = response.user;

      this.collections = this.optionalService.addOptionalFields(
        response.userCollections
      );
    });

    this.collectionsUpdateSubscription =
      this.collectionsService.updaterCollections$.subscribe(() => {
        this.collectionsRequestService
          .getUserCollections(this.user.id)
          .pipe(
            map((response) => {
              return response.msg;
            })
          )
          .subscribe((collections) => {
            this.collections =
              this.optionalService.addOptionalFields(collections);
          });
      });
  }

  ngOnDestroy() {
    this.collectionsUpdateSubscription.unsubscribe();
  }
}
