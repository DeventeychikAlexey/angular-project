import { Component } from '@angular/core';
import { CollectionService } from '../../../../shared/collections/services/collection.service';

@Component({
  selector: 'app-collection-edit',
  templateUrl: './collection-edit.component.html',
  styleUrls: ['./collection-edit.component.scss'],
})
export class CollectionEditComponent {
  constructor(public collectionService: CollectionService) {}
}
