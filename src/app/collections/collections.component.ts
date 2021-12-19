import { Component, Input } from '@angular/core';
import { CollectionInterface } from '../collection/interfaces/collection.interface';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss', '../list.scss'],
})
export class CollectionsComponent {
  @Input() collections: CollectionInterface[] = [];
}
