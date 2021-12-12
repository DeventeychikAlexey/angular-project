import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserInterface } from '@shared/interfaces/user.interface';
import { UsersService } from '@core/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { CollectionsService } from '@core/services/collections.service';
import { FilterInterface } from '@shared/interfaces/filter.interface';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { OptionalService } from '@core/services/optional.service';
import { CollectionsRequestService } from '@requests/services/collections-request.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit, OnDestroy {
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
