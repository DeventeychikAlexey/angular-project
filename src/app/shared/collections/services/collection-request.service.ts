import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectionInterface } from '../interfaces/collection.interface';
import { LoginService } from '../../../features/authorization-feature/services/login.service';
import { UserService } from '../../user/services/user.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CollectionRequestService {
  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private userService: UserService
  ) {}

  getCollectionById(id: number): Observable<CollectionInterface> {
    return this.http.get<CollectionInterface>(
      environment.baseURI + 'collection/' + id
    );
  }

  getUserCollections(id: number): Observable<CollectionInterface[]> {
    return this.http.get<CollectionInterface[]>(
      environment.baseURI +
        `${this.loginService.isLoggedIn ? 'user/' : ''}` +
        'collections/' +
        id
    );
  }

  getAllCollections(): Observable<CollectionInterface[]> {
    return this.http.get<CollectionInterface[]>(
      environment.baseURI +
        `${this.loginService.isLoggedIn ? 'user/' : ''}` +
        'collections'
    );
  }

  // createCollection(
  //   id: number,
  //   body: CollectionFormBodyInterface
  // ): Observable<ResponseInterface> {
  //   return this.http.post<ResponseInterface>(
  //     environment.baseURI +
  //       this.usersService.getUserOrAdmin(this.loginService.user) +
  //       '/collections/' +
  //       id,
  //     body
  //   );
  // }

  // editCollection(
  //   id: number,
  //   body: CollectionFormBodyInterface
  // ): Observable<ResponseInterface> {
  //   return this.http.put<ResponseInterface>(
  //     environment.baseURI +
  //       this.usersService.getUserOrAdmin(this.loginService.user) +
  //       '/collection/' +
  //       id,
  //     body
  //   );
  // }

  removeCollection(id: number): Observable<boolean> {
    return this.http.delete<boolean>(
      environment.baseURI +
        this.userService.getUserOrAdmin() +
        '/collection/' +
        id
    );
  }
}
