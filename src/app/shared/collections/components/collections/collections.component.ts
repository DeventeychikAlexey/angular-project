import { Component, Input } from '@angular/core';
import { CollectionInterface } from '../../interfaces/collection.interface';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: [
    './collections.component.scss',
    '../../../list/list.component.scss',
  ],
})
export class CollectionsComponent {
  @Input() collections: CollectionInterface[] = [];
}
