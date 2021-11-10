import { Injectable } from '@angular/core';
import { LoginService } from '@core/services/login.service';
import { RightsEnum } from '@shared/enums/rights.enum';
import { RightsIdEnum } from '@shared/enums/rights-id.enum';

@Injectable()
export class UserRightsService {
  constructor(private loginService: LoginService) {}

  get right() {
    if (this.loginService.user?.id_right === RightsIdEnum.Developer) {
      return RightsEnum.Developer;
    } else if (this.loginService.user?.id_right === RightsIdEnum.Admin) {
      return RightsEnum.Admin;
    } else if (this.loginService.user?.id_right === RightsIdEnum.User) {
      return RightsEnum.User;
    }

    return '';
  }

  get userOrAdmin() {
    if (
      this.loginService.user?.id_right === RightsIdEnum.Admin ||
      this.loginService.user?.id_right === RightsIdEnum.Developer
    ) {
      return RightsEnum.Admin;
    }

    return RightsEnum.User;
  }

  get isAdminRights() {
    if (
      this.loginService.user?.id_right === RightsIdEnum.Admin ||
      this.loginService.user?.id_right === RightsIdEnum.Developer
    ) {
      return true;
    }

    return false;
  }
}
