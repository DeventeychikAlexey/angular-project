import { Component } from '@angular/core';
import { CollectionsService } from '../collections/services/collections.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-feature.component.html',
  styleUrls: ['./home-feature.component.scss'],
})
export class HomeFeatureComponent {
  constructor(public collectionsService: CollectionsService) {}
}
