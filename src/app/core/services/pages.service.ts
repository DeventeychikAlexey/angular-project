import { Injectable } from '@angular/core';
import { UserInterface } from '@shared/interfaces/user.interface';

@Injectable()
export class PagesService {
  isMyPage(user: UserInterface, idPage: number) {
    if (user.id === idPage) {
      return true;
    }

    return false;
  }
}
