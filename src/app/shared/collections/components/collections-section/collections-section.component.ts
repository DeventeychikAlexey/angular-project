import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CollectionInterface } from '../../interfaces/collection.interface';
import { ListService } from '../../../list/services/list.service';

@Component({
  providers: [ListService],
  selector: 'app-collections-section',
  templateUrl: './collections-section.component.html',
  styleUrls: ['./collections-section.component.scss'],
})
export class CollectionsSectionComponent implements OnChanges {
  @Input() title?: string;
  @Input() collections: CollectionInterface[] = [];
  @Input() field?: string;
  @Input() label?: string;
  @Input() ignoreCase: boolean = true;
  @Input() isSearchable?: boolean;

  constructor(public listService: ListService<CollectionInterface>) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.collections) {
      this.listService.list = this.collections;
    }
  }
}
