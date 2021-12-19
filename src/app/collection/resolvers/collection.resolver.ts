import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CollectionService } from '../services/collection.service';
import { Observable } from 'rxjs';
import { CollectionInterface } from '../interfaces/collection.interface';

@Injectable({ providedIn: 'root' })
export class CollectionResolver implements Resolve<CollectionInterface> {
  constructor(private collectionService: CollectionService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CollectionInterface> {
    return this.collectionService.updateCollection(
      +route.paramMap.get('collectionId')!
    );
  }
}
