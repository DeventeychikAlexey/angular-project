import { Component, OnDestroy, OnInit } from '@angular/core';
import { CollectionsService } from '@core/services/collections.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { LoginService } from '@core/services/login.service';
import { ActivatedRoute } from '@angular/router';
import { OptionalService } from '@core/services/optional.service';
import { CollectionsRequestService } from '@requests/services/collections-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  collections: CollectionInterface[] = [];
  collectionsUpdateSubscription!: Subscription;

  constructor(
    private collectionsService: CollectionsService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private optionalService: OptionalService,
    private collectionsRequestService: CollectionsRequestService
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.collections = this.optionalService.addOptionalFields(
        data.collections
      );

      this.collectionsUpdateSubscription =
        this.collectionsService.updaterCollections$.subscribe(() => {
          this.collectionsRequestService
            .getCollections()
            .pipe(
              map((resp) => resp.msg),
              map((collections) => {
                return this.optionalService.addOptionalFields<CollectionInterface>(
                  collections
                );
              })
            )
            .subscribe((collections) => {
              this.collections = collections;
            });
        });
    });
  }

  ngOnDestroy() {
    this.collectionsUpdateSubscription.unsubscribe();
  }
}
