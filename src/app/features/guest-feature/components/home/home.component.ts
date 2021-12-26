import { Component } from '@angular/core';
import { CollectionService } from '../../../../shared/collections/services/collection.service';
import { CollectionRequestService } from '../../../../shared/collections/services/collection-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    public collectionService: CollectionService,
    private collectionRequestService: CollectionRequestService
  ) {
    collectionService.updaterCollections$.subscribe(() => {
      this.collectionRequestService
        .getAllCollections()
        .subscribe((collections) => {
          this.collectionService.collections = collections;
        });
    });
  }
}
