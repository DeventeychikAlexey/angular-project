import { Component, OnDestroy, OnInit } from '@angular/core';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { CollectionsService } from '@core/services/collections/collections.service';
import { PartialObserver, Subscription } from 'rxjs';
import { ResponseInterface } from '@core/interfaces/response.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  id: number = 0;
  subscription: Subscription;
  collections: CollectionInterface[] = [];
  filteredCollections: CollectionInterface[] = [];

  constructor(
    private collectionsService: CollectionsService,
    private route: ActivatedRoute
  ) {
    this.subscription = this.route.params.subscribe(
      (params) => (this.id = params.id)
    );
    this.collectionsService.updaterCollections.subscribe(
      this.updateCollections.bind(this)
    );
    this.collectionsService.updaterCollections.next();
  }

  updateCollections(): void {
    const observer: PartialObserver<ResponseInterface> = {
      next: (resp) => {
        this.collections = resp.msg as CollectionInterface[];
        this.filteredCollections = JSON.parse(JSON.stringify(this.collections));
      },
    };
    this.collectionsService.getUserCollections(this.id).subscribe(observer);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
