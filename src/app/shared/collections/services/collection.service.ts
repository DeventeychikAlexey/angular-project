import { Injectable } from '@angular/core';
import { CollectionType } from '../types/collection.type';
import { CollectionInterface } from '../interfaces/collection.interface';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  collection: CollectionType = null;
  collections: CollectionInterface[] = [];
  updaterCollections$ = new Subject();

  constructor(private router: Router) {}

  goToUserPage(): Promise<boolean> {
    return this.router.navigate(['/', 'user', this.collection?.id_user]);
  }
}
