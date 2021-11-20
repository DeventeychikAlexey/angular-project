import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { ResponseInterface } from '@shared/interfaces/response.interface';
import { Observable } from 'rxjs';
import { UserInterface } from '@shared/interfaces/user.interface';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { LoginService } from '@core/services/login.service';
import { RightsIdEnum } from '@shared/enums/rights-id.enum';
import { RightsNameEnum } from '@shared/enums/rights-name.enum';

@Injectable()
export class UsersService {
  user!: UserInterface;
  collections: CollectionInterface[] = [];

  constructor(private http: HttpClient, private loginService: LoginService) {}

  isMe(user: UserInterface) {
    if (this.loginService.user && user) {
      return this.loginService.user.id === user.id;
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

  getUserOrAdmin(user: UserInterface) {
    if (
      user?.id_right === RightsIdEnum.Admin ||
      user?.id_right === RightsIdEnum.Developer
    ) {
      return RightsNameEnum.Admin;
    }

    return RightsNameEnum.User;
  }

  getUserById(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(environment.baseURI + 'user/' + id);
  }
}
