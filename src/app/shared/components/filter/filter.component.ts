import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent<T> implements OnInit {
  @Input() label = '';
  @Input() field = '';
  @Input() list: Array<T> = [];
  @Input() ignoreCase = true;

  @Output() listChange = new EventEmitter<T[]>();

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  get filterValue(): AbstractControl {
    return this.form.get('filterValue')!;
  }

  private createForm() {
    this.form = this.formBuilder.group({
      filterValue: null,
    });
  }

  submit() {
    const list: Array<T> = this.list.filter((item) => {
      const field: [string, unknown] = Object.entries(item).find(
        (field) => field[0] === this.field
      ) as [string, unknown];

      if (!this.ignoreCase && typeof field[1] === 'string') {
        return field[1].includes(this.filterValue.value.trim());
      } else if (this.ignoreCase && typeof field[1] === 'string') {
        return field[1]
          .toLowerCase()
          .includes(this.filterValue.value.trim().toLowerCase());
      }

      return field[1] == this.filterValue;
    });

    this.listChange.emit(list);
  }
}
