import { Component, OnInit } from '@angular/core';
import { LoginService } from '@core/services/login.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsersService } from '@core/services/users.service';
import { CollectionsService } from '@core/services/collections.service';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { UserInterface } from '@shared/interfaces/user.interface';
import { RightsService } from '@core/services/rights.service';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss'],
})
export class CollectionPageComponent implements OnInit {
  collection!: CollectionInterface;
  user!: UserInterface;

  constructor(
    public loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private collectionsService: CollectionsService,
    private rightsService: RightsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          return this.collectionsService.getCollectionById(params.id);
        }),
        map((resp) => resp.msg),
        switchMap((collection) => {
          this.collection = collection;

          return this.usersService.getUserById(collection.id_user);
        }),
        map((resp) => resp.msg),
        switchMap((user) => {
          this.user = user;

          let isMyCollection = false;

          if (user.id === this.loginService.user.id) {
            isMyCollection = true;
          }

          this.collection = Object.assign(this.collection, {
            isRemovable: this.rightsService.isAdmin || isMyCollection,
            isChangeable: this.rightsService.isAdmin || isMyCollection,
          });

          return of();
        })
      )
      .subscribe();
  }
}