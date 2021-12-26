import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CollectionService } from '../services/collection.service';
import { CollectionRequestService } from '../services/collection-request.service';
import { CollectionInterface } from '../interfaces/collection.interface';
import { tap } from 'rxjs/operators';

@Injectable()
export class CollectionsResolver implements Resolve<CollectionInterface[]> {
  constructor(
    private collectionService: CollectionService,
    private collectionRequestService: CollectionRequestService
  ) {}

  resolve(): Observable<CollectionInterface[]> {
    return this.collectionRequestService.getAllCollections().pipe(
      tap((collections) => {
        this.collectionService.collections = collections;
      })
    );
  }
}
