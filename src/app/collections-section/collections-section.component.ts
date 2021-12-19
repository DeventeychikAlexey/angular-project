import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CollectionInterface } from '../collection/interfaces/collection.interface';
import { FilterInterface } from '../interfaces/filter.interface';
import { ListSectionService } from '../list-section/services/list-section.service';

@Component({
  selector: 'app-collections-section',
  templateUrl: './collections-section.component.html',
  styleUrls: ['./collections-section.component.scss'],
})
export class CollectionsSectionComponent implements OnChanges {
  @Input() title = '';
  @Input() collections: CollectionInterface[] = [];
  @Input() filter: FilterInterface | null = null;

  constructor(public listSectionService: ListSectionService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.collections) {
      this.listSectionService.list = this.collections;
    }
  }
}
