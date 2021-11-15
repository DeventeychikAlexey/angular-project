import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { CollectionFilterInterface } from '@shared/interfaces/collection-filter.interface';

@Component({
  selector: 'app-collections-section',
  templateUrl: './collections-section.component.html',
  styleUrls: ['./collections-section.component.scss'],
})
export class CollectionsSectionComponent implements OnChanges {
  @Input() title = '';
  @Input() collections: CollectionInterface[] = [];

  @Input() filter: CollectionFilterInterface | null = null;

  filteredCollections: CollectionInterface[] = this.collections;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.collections) {
      this.filteredCollections = this.collections;
    }
  }
}
