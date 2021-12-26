import { Injectable } from '@angular/core';
import { UserType } from '../types/user.type';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';
import { RightsIdEnum } from '../interfaces/rights-id.enum';
import { RightsNameEnum } from '../interfaces/rights-name.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserType = null;
  needsUpdateHeader$ = new Subject();

  constructor(private router: Router) {}

  goToUserPage(): Promise<boolean> {
    return this.router.navigate(['/', 'user', this.user?.id]);
  }

  isMe(user: UserInterface) {
    if (this.user && user) {
      return this.user.id === user.id;
    }

    return false;
  }

  isAdmin(user: UserInterface) {
    if (
      user?.id_right === RightsIdEnum.Admin ||
      user?.id_right === RightsIdEnum.Developer
    ) {
      return true;
    }

    return false;
  }

  isMeOrAdmin(user: UserInterface) {
    return this.isMe(user) || this.isAdmin(user);
  }

  getUserOrAdmin() {
    if (
      this.user?.id_right === RightsIdEnum.Admin ||
      this.user?.id_right === RightsIdEnum.Developer
    ) {
      return RightsNameEnum.Admin;
    }

    return RightsNameEnum.User;
  }
}
