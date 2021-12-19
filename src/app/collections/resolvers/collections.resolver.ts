import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CollectionsService } from '../services/collections.service';
import { Observable } from 'rxjs';
import { CollectionInterface } from '../../collection/interfaces/collection.interface';

@Injectable({ providedIn: 'root' })
export class CollectionsResolver implements Resolve<CollectionInterface[]> {
  constructor(private collectionsService: CollectionsService) {}

  resolve(): Observable<CollectionInterface[]> {
    return this.collectionsService.updateCollections();
  }
}
