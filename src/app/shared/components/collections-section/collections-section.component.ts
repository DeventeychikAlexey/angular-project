import { Component, Input } from '@angular/core';
import { CollectionInterface } from '@shared/interfaces/collection.interface';

@Component({
  selector: 'app-collection-section',
  templateUrl: './collections-section.component.html',
  styleUrls: ['./collections-section.component.scss'],
})
export class CollectionsSectionComponent {
  @Input() title = '';
  @Input() collections: CollectionInterface[] = [];
}
