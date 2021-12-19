import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';
import { UserInterface } from '../../interfaces/user.interface';
import { CollectionInterface } from '../../collection/interfaces/collection.interface';
import { LoginService } from '../../login/services/login.service';
import { RightsIdEnum } from '../../enums/rights-id.enum';
import { RightsNameEnum } from '../../enums/rights-name.enum';
import { ResponseInterface } from '../../interfaces/response.interface';

@Injectable({ providedIn: 'root' })
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
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'user-feature-features/' + id
    );
  }
}
