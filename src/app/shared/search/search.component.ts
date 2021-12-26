import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent<T> implements OnInit {
  @Input() label?: string;
  @Input() field?: string;
  @Input() list: Array<T> = [];
  @Input() ignoreCase = true;

  @Output() listChange = new EventEmitter<T[]>();

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      filterValue: null,
    });
  }

  submit() {
    const list: Array<T> = this.list.filter((item) => {
      const field: [string, unknown] = Object.entries(item).find(
        (field) => field[0] === this.field
      ) as [string, unknown];

      if (!this.ignoreCase && typeof field[1] === 'string') {
        return field[1].includes(
          this.formGroup.get('filterValue')!.value?.trim() || ''
        );
      } else if (this.ignoreCase && typeof field[1] === 'string') {
        return field[1]
          .toLowerCase()
          .includes(
            this.formGroup.get('filterValue')!.value?.trim().toLowerCase() || ''
          );
      }

      return field[1] == this.formGroup.get('filterValue')!;
    });

    this.listChange.emit(list);
  }
}
