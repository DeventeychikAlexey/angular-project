import { Component, OnInit, Input } from '@angular/core';
import { CollectionInterface } from '@shared/interfaces/collection.interface';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  @Input() collection!: CollectionInterface;

  constructor() {}

  ngOnInit(): void {}
}
