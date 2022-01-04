import { Injectable } from '@angular/core';
import { CollectionType } from '../types/collection.type';
import { CollectionInterface } from '../interfaces/collection.interface';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../../user/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  collection: CollectionType = null;
  collections: CollectionInterface[] = [];
  updaterCollections$ = new Subject();

  constructor(private router: Router, private userService: UserService) {}

  goToUserPage(): Promise<boolean> {
    return this.router.navigate([
      '/',
      'user',
      this.collection?.id_user || this.userService.user?.id,
    ]);
  }
}
