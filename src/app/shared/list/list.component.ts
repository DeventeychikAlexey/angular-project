import { Component, Input, TemplateRef } from '@angular/core';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent<T> {
  @Input() title?: string;
  @Input() list: Array<T> = [];
  @Input() field?: string;
  @Input() label?: string;
  @Input() ignoreCase?: boolean;
  @Input() isSearchable?: boolean;
  @Input() listTemplate!: TemplateRef<unknown>;

  constructor(public listService: ListService<T>) {}
}
