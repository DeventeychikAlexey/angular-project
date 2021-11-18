import { Component, Input, SimpleChanges } from '@angular/core';
import { ListService } from '@core/services/list.service';
import { FilterInterface } from '@shared/interfaces/filter.interface';
import { ItemInterface } from '@shared/interfaces/item.interface';

@Component({
  selector: 'app-items-section',
  templateUrl: './items-section.component.html',
  styleUrls: ['./items-section.component.scss'],
  providers: [ListService],
})
export class ItemsSectionComponent {
  @Input() title = '';
  @Input() items: ItemInterface[] = [];
  @Input() filter: FilterInterface | null = null;

  constructor(public listService: ListService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items) {
      this.listService.tempList = this.items;
    }
  }
}
