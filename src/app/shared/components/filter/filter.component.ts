import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent<T> implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() list!: Array<T>;
  @Input() field: string = '';
  @Input() ignoreCase: boolean = true;

  filterValue: string = '';

  @Output() listChange: EventEmitter<T[]> = new EventEmitter<T[]>();

  constructor() {}

  submit() {
    const list: T[] = this.list.filter((item) => {
      const field: [string, unknown] = Object.entries(item).find(
        (field) => field[0] === this.field
      ) as [string, unknown];
      if (!this.ignoreCase && typeof field[1] === 'string')
        return field[1].includes(this.filterValue.trim());
      else if (this.ignoreCase && typeof field[1] === 'string')
        return field[1]
          .toLowerCase()
          .includes(this.filterValue.trim().toLowerCase());
      return field[1] == this.filterValue;
    });
    this.listChange.emit(list);
  }

  ngOnInit(): void {}
}
