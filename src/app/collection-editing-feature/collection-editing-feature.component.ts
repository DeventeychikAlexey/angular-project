import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { CollectionInterface } from '../collection/interfaces/collection.interface';
import { UserInterface } from '../interfaces/user.interface';
import { LoginService } from '../login/services/login.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../user-header/services/users.service';
import { OptionalService } from '../services/optional.service';
import { CollectionRequestService } from '../collection/services/collection-request.service';
import { CollectionsService } from '../collections/services/collections.service';
import { CollectionService } from '../collection/services/collection.service';

@Component({
  selector: 'app-collection-editing-page',
  templateUrl: './collection-editing-feature.component.html',
  styleUrls: ['./collection-editing-feature.component.scss'],
})
export class CollectionEditingFeatureComponent implements OnInit {
  user!: UserInterface;

  constructor(
    public loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    public collectionService: CollectionService
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.user = data.user;
    });
  }
}
