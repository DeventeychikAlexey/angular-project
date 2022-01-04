import { Component } from '@angular/core';
import { ItemService } from '../../../../shared/items/services/item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss'],
})
export class ItemEditComponent {
  constructor(public itemService: ItemService) {}
}
