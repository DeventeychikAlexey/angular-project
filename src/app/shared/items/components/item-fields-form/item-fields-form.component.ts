import { Component, Input } from '@angular/core';
import { FormArray } from '@angular/forms';
import { ItemFormService } from '../../services/item-form.service';

@Component({
  selector: 'app-item-fields-form',
  templateUrl: './item-fields-form.component.html',
  styleUrls: ['./item-fields-form.component.scss'],
})
export class ItemFieldsFormComponent {
  @Input() formArray!: FormArray;
  @Input() title?: string;
  @Input() type = 'text';
  @Input() max?: number;
  @Input() min?: number;

  constructor(public itemFormService: ItemFormService) {}

  @Input() add: Function = () => {};
}
