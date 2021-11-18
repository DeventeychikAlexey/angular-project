import { Component, Input, TemplateRef } from '@angular/core';
import { FilterInterface } from '@shared/interfaces/filter.interface';
import { ListService } from '@core/services/list.service';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.scss'],
})
export class ListSectionComponent {
  @Input() title = '';
  @Input() list: Array<any> = [];
  @Input() filter: FilterInterface | null = null;

  @Input() listTemplate!: TemplateRef<any>;

  constructor(public listService: ListService) {}
}
