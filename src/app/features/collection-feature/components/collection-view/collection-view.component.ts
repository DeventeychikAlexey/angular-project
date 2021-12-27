import { Component } from '@angular/core';
import { CollectionService } from '../../../../shared/collections/services/collection.service';

@Component({
  selector: 'app-collection-view',
  templateUrl: './collection-view.component.html',
  styleUrls: ['./collection-view.component.scss'],
})
export class CollectionViewComponent {
  constructor(public collectionService: CollectionService) {}
}
