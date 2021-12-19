import { Injectable, OnDestroy } from '@angular/core';
import { CollectionInterface } from '../interfaces/collection.interface';
import { ItemInterface } from '../../interfaces/item.interface';
import {
  asyncScheduler,
  Observable,
  of,
  queueScheduler,
  Subject,
  Subscription,
} from 'rxjs';
import { map, observeOn, switchMap } from 'rxjs/operators';
import { CollectionRequestService } from './collection-request.service';
import { OptionalService } from '../../services/optional.service';
import { ResponseInterface } from '../../interfaces/response.interface';
import { CollectionsRequestService } from '../../collections/services/collections-request.service';
import { ItemsRequestService } from '../../items/services/items-request.service';

@Injectable({ providedIn: 'root' })
export class CollectionService implements OnDestroy {
  collection!: CollectionInterface;
  items: ItemInterface[] = [];
  updaterCollection$ = new Subject<number>();
  collectionUpdateSubscription!: Subscription;
  updaterCollectionItems$ = new Subject<number>();
  collectionItemsUpdateSubscription!: Subscription;

  constructor(
    private collectionRequestService: CollectionRequestService,
    private itemsRequestService: ItemsRequestService,
    private optionalService: OptionalService
  ) {
    this.collectionUpdateSubscription = this.updaterCollection$.subscribe(
      (id) => this.updateCollection(id).subscribe()
    );

    this.collectionItemsUpdateSubscription =
      this.updaterCollectionItems$.subscribe((id) =>
        this.updateItems(id).subscribe()
      );
  }

  updateCollection(idCollection: number): Observable<CollectionInterface> {
    return this.collectionRequestService.getCollectionById(idCollection).pipe(
      map((response) => response.msg),
      switchMap((collection) => {
        this.collection = this.optionalService.addOptionalField(collection);

        return of(this.collection);
      })
    );
  }

  updateItems(idCollection: number): Observable<ItemInterface[]> {
    return this.itemsRequestService.getCollectionItems(idCollection).pipe(
      map((response) => response.msg),
      switchMap((items) => {
        this.items = this.optionalService.addOptionalFields(items);

        return of(this.items);
      })
    );
  }

  ngOnDestroy() {
    this.collectionUpdateSubscription.unsubscribe();
    this.collectionItemsUpdateSubscription.unsubscribe();
  }
}
