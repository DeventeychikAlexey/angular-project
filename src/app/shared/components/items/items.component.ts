import { Component, Input } from '@angular/core';
import { ItemInterface } from '@shared/interfaces/item.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss', '../list.scss'],
})
export class ItemsComponent {
  @Input() items: ItemInterface[] = [];
}
