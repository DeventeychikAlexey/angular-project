import { Component, Input } from '@angular/core';
import { ItemInterface } from '../../interfaces/item.interface';

@Component({
  selector: 'app-item-section',
  templateUrl: './item-section.component.html',
  styleUrls: ['./item-section.component.scss'],
})
export class ItemSectionComponent {
  @Input() item!: ItemInterface;
}
