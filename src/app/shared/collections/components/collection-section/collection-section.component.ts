import { Component, Input } from '@angular/core';
import { CollectionInterface } from '../../interfaces/collection.interface';

@Component({
  selector: 'app-collection-section',
  templateUrl: './collection-section.component.html',
  styleUrls: ['./collection-section.component.scss'],
})
export class CollectionSectionComponent {
  @Input() collection!: CollectionInterface;
}
