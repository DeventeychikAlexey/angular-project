import { Injectable } from '@angular/core';
import { LoginService } from '@core/services/login.service';
import { RightsNameEnum } from '@shared/enums/rights-name.enum';
import { RightsIdEnum } from '@shared/enums/rights-id.enum';

@Injectable()
export class RightsService {
  constructor(private loginService: LoginService) {}

  get rightName() {
    let rightName = '';

    if (this.loginService.user?.id_right === RightsIdEnum.Developer) {
      rightName = RightsNameEnum.Developer;
    } else if (this.loginService.user?.id_right === RightsIdEnum.Admin) {
      rightName = RightsNameEnum.Admin;
    } else if (this.loginService.user?.id_right === RightsIdEnum.User) {
      rightName = RightsNameEnum.User;
    }

    return rightName;
  }

  get userOrAdmin() {
    if (
      this.loginService.user?.id_right === RightsIdEnum.Admin ||
      this.loginService.user?.id_right === RightsIdEnum.Developer
    ) {
      return RightsNameEnum.Admin;
    }

    return RightsNameEnum.User;
  }

  get isAdmin() {
    if (
      this.loginService.user?.id_right === RightsIdEnum.Admin ||
      this.loginService.user?.id_right === RightsIdEnum.Developer
    ) {
      return true;
    }

    return false;
  }
}
