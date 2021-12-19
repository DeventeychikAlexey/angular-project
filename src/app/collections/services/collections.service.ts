import { Injectable, OnDestroy } from '@angular/core';
import { CollectionInterface } from '../../collection/interfaces/collection.interface';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CollectionsRequestService } from './collections-request.service';
import { OptionalService } from '../../services/optional.service';

@Injectable({
  providedIn: 'root',
})
export class CollectionsService implements OnDestroy {
  collections: CollectionInterface[] = [];
  updaterCollections$ = new Subject();
  collectionsUpdateSubscription!: Subscription;

  constructor(
    private collectionsRequestService: CollectionsRequestService,
    private optionalService: OptionalService
  ) {
    this.collectionsUpdateSubscription = this.updaterCollections$.subscribe(
      () => this.updateCollections().subscribe()
    );
  }

  updateCollections(): Observable<CollectionInterface[]> {
    return this.collectionsRequestService.getAllCollections().pipe(
      switchMap((collections) => {
        this.collections =
          this.optionalService.addOptionalFields<CollectionInterface>(
            collections
          );

        return of(this.collections);
      })
    );
  }

  ngOnDestroy() {
    this.collectionsUpdateSubscription.unsubscribe();
  }
}
