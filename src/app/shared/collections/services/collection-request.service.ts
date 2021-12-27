import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectionInterface } from '../interfaces/collection.interface';
import { LoginService } from '../../../features/authorization-feature/services/login.service';
import { UserService } from '../../user/services/user.service';
import { environment } from '../../../../environments/environment';
import { CollectionFormBodyInterface } from '../interfaces/collection-form-body.interface';

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
      environment.baseURI +
        `${this.loginService.isLoggedIn ? 'user/' : ''}` +
        'collection/' +
        id
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

  createCollection(
    id: number,
    body: CollectionFormBodyInterface
  ): Observable<CollectionInterface> {
    return this.http.post<CollectionInterface>(
      environment.baseURI +
        this.userService.getUserOrAdmin() +
        '/collections/' +
        id,
      body
    );
  }

  editCollection(
    id: number,
    body: CollectionFormBodyInterface
  ): Observable<CollectionInterface> {
    return this.http.put<CollectionInterface>(
      environment.baseURI +
        this.userService.getUserOrAdmin() +
        '/collection/' +
        id,
      body
    );
  }

  removeCollection(id: number): Observable<boolean> {
    return this.http.delete<boolean>(
      environment.baseURI +
        this.userService.getUserOrAdmin() +
        '/collection/' +
        id
    );
  }
}
