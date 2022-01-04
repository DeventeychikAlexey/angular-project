import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemInterface } from '../interfaces/item.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LoginService } from '../../../features/authorization-feature/services/login.service';
import { CollectionInterface } from '../../collections/interfaces/collection.interface';
import { UserService } from '../../user/services/user.service';
import { ItemFormBodyInterface } from '../interfaces/item-form-body.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemRequestService {
  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private userService: UserService
  ) {}

  getItemById(id: number): Observable<ItemInterface> {
    return this.http.get<ItemInterface>(
      environment.baseURI +
        `${this.loginService.isLoggedIn ? 'user/' : ''}` +
        'item/' +
        id
    );
  }

  getCollectionItems(id: number): Observable<ItemInterface[]> {
    return this.http.get<ItemInterface[]>(
      environment.baseURI +
        `${this.loginService.isLoggedIn ? 'user/' : ''}` +
        'items/' +
        id
    );
  }

  getItems(): Observable<CollectionInterface[]> {
    return this.http.get<CollectionInterface[]>(
      environment.baseURI +
        `${this.loginService.isLoggedIn ? 'user/' : ''}` +
        'items'
    );
  }

  createItem(
    collectionId: number,
    body: ItemFormBodyInterface
  ): Observable<ItemInterface> {
    return this.http.post<ItemInterface>(
      environment.baseURI +
        this.userService.getUserOrAdmin() +
        '/item/' +
        collectionId,
      body
    );
  }

  editItem(id: number, body: ItemFormBodyInterface): Observable<ItemInterface> {
    return this.http.put<ItemInterface>(
      environment.baseURI + this.userService.getUserOrAdmin() + '/item/' + id,
      body
    );
  }

  removeItem(id: number): Observable<boolean> {
    return this.http.delete<boolean>(
      environment.baseURI + this.userService.getUserOrAdmin() + '/item/' + id
    );
  }
}
