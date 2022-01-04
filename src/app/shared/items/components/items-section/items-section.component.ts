import { Component, Input, SimpleChanges } from '@angular/core';
import { ListService } from '../../../list/services/list.service';
import { ItemInterface } from '../../interfaces/item.interface';

@Component({
  providers: [ListService],
  selector: 'app-items-section',
  templateUrl: './items-section.component.html',
  styleUrls: ['./items-section.component.scss'],
})
export class ItemsSectionComponent {
  @Input() title = '';
  @Input() items: ItemInterface[] = [];
  @Input() field?: string;
  @Input() label?: string;
  @Input() ignoreCase?: boolean;
  @Input() isSearchable?: boolean;

  constructor(public listService: ListService<ItemInterface>) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items) {
      this.listService.list = this.items;
    }
  }
}
