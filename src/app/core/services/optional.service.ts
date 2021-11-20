import { Injectable } from '@angular/core';
import { UsersService } from '@core/services/users.service';
import { LoginService } from '@core/services/login.service';

@Injectable()
export class OptionalService {
  constructor(
    private usersService: UsersService,
    private loginService: LoginService
  ) {}

  private get isViewableDefault() {
    return true;
  }

  private get isChangeableDefault() {
    return this.usersService.isMeOrAdmin(this.loginService.user);
  }

  private get isRemovableDefault() {
    return this.usersService.isMeOrAdmin(this.loginService.user);
  }

  addOptionalField<T>(
    object: T,
    isViewable = this.isViewableDefault,
    isChangeable = this.isChangeableDefault,
    isRemovable = this.isRemovableDefault
  ): T {
    return Object.assign(object, {
      isViewable: isViewable,
      isChangeable: isChangeable,
      isRemovable: isRemovable,
    });
  }

  addOptionalFields<T>(
    objects: T[],
    isViewable = this.isViewableDefault,
    isChangeable = this.isChangeableDefault,
    isRemovable = this.isRemovableDefault
  ): T[] {
    return objects.map((object) => {
      return this.addOptionalField(
        object,
        isViewable,
        isChangeable,
        isRemovable
      );
    });
  }
}
