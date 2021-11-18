import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { FilterInterface } from '@shared/interfaces/filter.interface';
import { ListService } from '@core/services/list.service';

@Component({
  selector: 'app-collections-section',
  templateUrl: './collections-section.component.html',
  styleUrls: ['./collections-section.component.scss'],
  providers: [ListService],
})
export class CollectionsSectionComponent implements OnChanges {
  @Input() title = '';
  @Input() collections: CollectionInterface[] = [];
  @Input() filter: FilterInterface | null = null;

  constructor(public listService: ListService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.collections) {
      this.listService.tempList = this.collections;
    }
  }
}
