import { Injectable } from '@angular/core';
import { UserType } from '../types/user.type';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserType = null;
  needsUpdateHeader$ = new Subject();

  constructor(private router: Router) {}

  goToUserPage(): Promise<boolean> {
    return this.router.navigate(['/', 'users', this.user?.id]);
  }
}
