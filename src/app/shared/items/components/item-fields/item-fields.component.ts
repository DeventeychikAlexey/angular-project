import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-fields',
  templateUrl: './item-fields.component.html',
  styleUrls: ['./item-fields.component.scss'],
})
export class ItemFieldsComponent {
  @Input() fields = [];
}
