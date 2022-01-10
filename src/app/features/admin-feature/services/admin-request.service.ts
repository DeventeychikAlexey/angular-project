import { Injectable } from '@angular/core';
import { UserService } from '../../../shared/user/services/user.service';
import { UserInterface } from '../../../shared/user/interfaces/user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminRequestService {
  constructor(private http: HttpClient, private userService: UserService) {}

  upgradeUser(user: UserInterface): Observable<boolean> {
    return this.http.put<boolean>(
      environment.baseURI + 'developer/upgradeUser/' + user.id,
      {}
    );
  }

  downgradeUser(user: UserInterface): Observable<boolean> {
    return this.http.put<boolean>(
      environment.baseURI + 'developer/downgradeUser/' + user.id,
      {}
    );
  }

  toggleBlocked(user: UserInterface): Observable<boolean> {
    return this.http.put<boolean>(
      environment.baseURI +
        this.userService.getAdminOrDeveloper() +
        '/toggleBlocked/' +
        user.id,
      {}
    );
  }

  deleteUser(user: UserInterface): Observable<boolean> {
    return this.http.delete<boolean>(
      environment.baseURI +
        this.userService.getAdminOrDeveloper() +
        '/user/' +
        user.id
    );
  }
}
