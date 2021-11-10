import { Injectable } from '@angular/core';
import { LoginService } from '@core/services/login.service';

@Injectable()
export class PagesService {
  constructor(private loginService: LoginService) {}

  isMyPage(idPage: number) {
    if (this.loginService.user?.id === idPage) {
      return true;
    }

    return false;
  }
}
