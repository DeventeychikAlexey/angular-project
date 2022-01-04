import { Component } from '@angular/core';
import { ItemService } from '../../../../shared/items/services/item.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss'],
})
export class ItemViewComponent {
  constructor(public itemService: ItemService) {}
}
