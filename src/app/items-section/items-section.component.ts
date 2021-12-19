import { Component, Input, SimpleChanges } from '@angular/core';
import { ItemInterface } from '../interfaces/item.interface';
import { FilterInterface } from '../interfaces/filter.interface';
import { ListSectionService } from '../list-section/services/list-section.service';

@Component({
  selector: 'app-items-section',
  templateUrl: './items-section.component.html',
  styleUrls: ['./items-section.component.scss'],
})
export class ItemsSectionComponent {
  @Input() title = '';
  @Input() items: ItemInterface[] = [];
  @Input() filter: FilterInterface | null = null;

  constructor(public listSectionService: ListSectionService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items) {
      this.listSectionService.list = this.items;
    }
  }
}
