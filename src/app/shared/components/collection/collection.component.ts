import { Component, OnInit, Input } from '@angular/core';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { CollectionsService } from '@core/services/collections/collections.service';
import { PartialObserver } from 'rxjs';
import { ResponseInterface } from '@core/interfaces/response.interface';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  @Input() collection!: CollectionInterface;
  image: string = '';

  constructor(private collectionsService: CollectionsService) {
    this.image = this.collectionsService.thumbnail;
  }

  ngOnInit(): void {
    const observer: PartialObserver<ResponseInterface> = {
      next: (data) => {
        this.image = data.msg as string;
      },
    };
    this.collectionsService.getImage(this.collection.id).subscribe(observer);
  }
}
