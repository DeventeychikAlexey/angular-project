import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { CollectionsService } from '@core/services/collections.service';

@Component({
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss'],
})
export class CollectionPageComponent implements OnInit {
  collection?: CollectionInterface;

  constructor(
    private activatedRoute: ActivatedRoute,
    private collectionsService: CollectionsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.collectionsService
        .getCollectionById(+params.id)
        .subscribe((resp) => {
          this.collection = <CollectionInterface>resp.msg;
        });
    });
  }
}
