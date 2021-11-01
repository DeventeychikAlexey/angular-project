import { Component, OnInit, Input } from '@angular/core';
import { CollectionInterface } from '@shared/interfaces/collection.interface';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
})
export class CollectionsComponent implements OnInit {
  @Input() collections!: CollectionInterface[];
  constructor() {}

  ngOnInit(): void {}
}
