import { Component, OnInit } from '@angular/core';
import { LoginService } from '@core/services/login.service';
import { ActivatedRoute } from '@angular/router';
import { CollectionsService } from '@core/services/collections.service';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { UserInterface } from '@shared/interfaces/user.interface';
import { ItemInterface } from '@shared/interfaces/item.interface';
import { FilterInterface } from '@shared/interfaces/filter.interface';
import { OptionalService } from '@core/services/optional.service';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss'],
})
export class CollectionPageComponent implements OnInit {
  collection!: CollectionInterface;
  user!: UserInterface;
  items: ItemInterface[] = [];
  filter: FilterInterface = {
    label: 'Find item',
    field: 'name',
    ignoreCase: true,
  };

  constructor(
    public loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private collectionsService: CollectionsService,
    private optionalService: OptionalService
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.user = data.user;

      this.collection = this.optionalService.addOptionalField(
        data.collection,
        false
      );

      this.items = this.optionalService.addOptionalFields(
        data.collectionItems,
        false
      );
    });
  }
}
