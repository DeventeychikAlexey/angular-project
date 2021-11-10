import { Component, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { CollectionsService } from '@core/services/collections.service';

@Component({
  selector: 'app-collections-page',
  templateUrl: './collections-page.component.html',
  styleUrls: ['./collections-page.component.scss'],
})
export class CollectionsPageComponent implements OnDestroy {
  id: number = 0;
  private routesSubscription: Subscription;
  private collectionsSubscription: Subscription;
  collections: CollectionInterface[] = [];
  filteredCollections: CollectionInterface[] = [];

  @Input() isCollectionsChangeable = false;
  @Input() isCollectionsRemovable = false;

  constructor(
    private collectionsService: CollectionsService,
    private route: ActivatedRoute
  ) {
    this.routesSubscription = this.route.params.subscribe((params) => {
      this.id = params.id;
    });

    this.collectionsSubscription =
      this.collectionsService.updaterCollections$.subscribe(
        this.updateCollections.bind(this)
      );

    this.collectionsService.updaterCollections$.next();
  }

  updateCollections() {
    this.collectionsService.getUserCollections(this.id).subscribe((resp) => {
      this.collections = resp.msg as CollectionInterface[];

      this.collections = this.collections.map((collection) =>
        Object.assign(collection, {
          isViewable: true,
          isChangeable: this.isCollectionsChangeable,
          isRemovable: this.isCollectionsRemovable,
        })
      );

      this.filteredCollections = JSON.parse(JSON.stringify(this.collections));
    });
  }

  ngOnDestroy() {
    this.routesSubscription.unsubscribe();
    this.collectionsSubscription.unsubscribe();
  }
}
