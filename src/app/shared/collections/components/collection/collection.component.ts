import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CollectionInterface } from '../../interfaces/collection.interface';
import { DialogService } from '../../../dialog/services/dialog.service';
import { ComponentType } from '@angular/cdk/overlay';
import { CollectionRequestService } from '../../services/collection-request.service';
import { SnackBarService } from '../../../../root/services/snack-bar.service';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  @Input() collection!: CollectionInterface;

  @ViewChild('dialog') dialogComponent!: ComponentType<unknown>;

  constructor(
    public dialogService: DialogService,
    private collectionRequestService: CollectionRequestService,
    private snackBarService: SnackBarService,
    private collectionService: CollectionService
  ) {}

  ngOnInit() {}

  remove() {
    this.collectionRequestService
      .removeCollection(this.collection.id)
      .subscribe(() => {
        this.collectionService.updaterCollections$.next();
        this.snackBarService.openSnackBar('Successfully deleted!');
      });
  }
}
