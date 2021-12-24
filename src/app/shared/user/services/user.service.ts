import { Injectable } from '@angular/core';
import { UserType } from '../types/user.type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserType = null;

  constructor(private router: Router) {}

  goToUserPage(): Promise<boolean> {
    return this.router.navigate(['/', 'users', this.user?.id]);
  }
}
