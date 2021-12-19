import { Component, Input, TemplateRef } from '@angular/core';
import { FilterInterface } from '../interfaces/filter.interface';
import { ListSectionService } from './services/list-section.service';

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

  constructor(public listSectionService: ListSectionService) {}
}
