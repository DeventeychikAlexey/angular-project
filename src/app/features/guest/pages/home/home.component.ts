import { Component, OnDestroy, OnInit } from '@angular/core';
import { CollectionsService } from '@core/services/collections.service';
import { of, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { LoginService } from '@core/services/login.service';
import { RightsService } from '@core/services/rights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  collections: CollectionInterface[] = [];
  collectionsUpdateSubcription!: Subscription;

  constructor(
    private collectionsService: CollectionsService,
    private loginService: LoginService,
    private rightsService: RightsService
  ) {}

  ngOnInit() {
    this.collectionsUpdateSubcription =
      this.collectionsService.updaterCollections$.subscribe(() => {
        this.getCollections();
      });
    this.collectionsService.updaterCollections$.next();
  }

  getCollections() {
    this.collectionsService
      .getCollections()
      .pipe(
        map((resp) => resp.msg),
        map((collections) =>
          collections.map((collection: CollectionInterface) =>
            Object.assign(collection, {
              isViewable: true,
              isChangeable: this.rightsService.isAdmin,
              isRemovable: this.rightsService.isAdmin,
            })
          )
        )
      )
      .subscribe((collections) => {
        this.collections = collections;
      });
  }

  ngOnDestroy() {
    this.collectionsUpdateSubcription.unsubscribe();
  }
}
