import { Component, Input } from '@angular/core';
import { CollectionInterface } from '../../interfaces/collection.interface';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
})
export class CollectionsComponent {
  @Input() collections: CollectionInterface[] = [];
}
