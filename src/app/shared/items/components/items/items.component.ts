import { Component, Input } from '@angular/core';
import { ItemInterface } from '../../interfaces/item.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss', '../../../list/list.component.scss'],
})
export class ItemsComponent {
  @Input() items: ItemInterface[] = [];
}
