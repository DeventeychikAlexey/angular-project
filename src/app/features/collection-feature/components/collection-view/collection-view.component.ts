import { Component } from '@angular/core';
import { CollectionService } from '../../../../shared/collections/services/collection.service';
import { ItemService } from '../../../../shared/items/services/item.service';
import { Subscription } from 'rxjs';
import { ItemRequestService } from '../../../../shared/items/services/item-request.service';

@Component({
  selector: 'app-collection-view',
  templateUrl: './collection-view.component.html',
  styleUrls: ['./collection-view.component.scss'],
})
export class CollectionViewComponent {
  updaterItemsSubscription!: Subscription;

  constructor(
    public collectionService: CollectionService,
    public itemService: ItemService,
    private itemRequestService: ItemRequestService
  ) {
    this.updaterItemsSubscription = this.itemService.updaterItems$.subscribe(
      () => {
        this.itemRequestService
          .getCollectionItems(this.collectionService.collection!.id)
          .subscribe((items) => {
            this.itemService.items = items;
          });
      }
    );
  }
}
