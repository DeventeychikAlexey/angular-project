import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from '../interfaces/user.interface';
import { FilterInterface } from '../interfaces/filter.interface';
import { LoginService } from '../login/services/login.service';
import { CollectionService } from '../collection/services/collection.service';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-feature.component.html',
  styleUrls: ['./collection-feature.component.scss'],
})
export class CollectionFeatureComponent implements OnInit {
  user!: UserInterface;
  filter: FilterInterface = {
    label: 'Find item',
    field: 'name',
    ignoreCase: true,
  };

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
