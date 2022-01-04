import { Component, OnDestroy } from '@angular/core';
import { CollectionService } from '../../../../shared/collections/services/collection.service';
import { UserService } from '../../../../shared/user/services/user.service';
import { CollectionRequestService } from '../../../../shared/collections/services/collection-request.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnDestroy {
  updaterCollectionsSubscription: Subscription;

  constructor(
    public collectionService: CollectionService,
    public userService: UserService,
    private collectionRequestService: CollectionRequestService
  ) {
    this.updaterCollectionsSubscription =
      this.collectionService.updaterCollections$.subscribe(() => {
        this.collectionRequestService
          .getUserCollections(this.userService.user!.id)
          .subscribe((collections) => {
            this.collectionService.collections = collections;
          });
      });
  }

  ngOnDestroy() {
    this.updaterCollectionsSubscription.unsubscribe();
  }
}
