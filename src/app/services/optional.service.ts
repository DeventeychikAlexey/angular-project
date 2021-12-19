import { Injectable } from '@angular/core';
import { UsersService } from '../user-header/services/users.service';
import { LoginService } from '../login/services/login.service';

@Injectable({ providedIn: 'root' })
export class OptionalService {
  constructor(
    private usersService: UsersService,
    private loginService: LoginService
  ) {}

  addOptionalField<T>(object: T): T {
    return Object.assign(object, {
      isViewable: true,
      isChangeable: this.usersService.isMeOrAdmin(this.loginService.user),
      isRemovable: this.usersService.isMeOrAdmin(this.loginService.user),
    });
  }

  addOptionalFields<T>(objects: T[]): T[] {
    return objects.map((object) => {
      return this.addOptionalField(object);
    });
  }
}
