import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CollectionInterface } from '../../interfaces/collection.interface';
import { DialogService } from '../../../dialog/services/dialog.service';
import { ComponentType } from '@angular/cdk/overlay';
import { CollectionRequestService } from '../../services/collection-request.service';
import { SnackBarService } from '../../../../root/services/snack-bar.service';
import { CollectionService } from '../../services/collection.service';
import { DialogActionInterface } from '../../../dialog/interfaces/dialog-action.interface';
import { ColorsEnum } from '../../../../root/enums/colors.enum';
import { ImageRequestService } from '../../services/image-request.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  actions: DialogActionInterface[] = [
    { title: 'Remove', handler: this.remove.bind(this), color: 'warn' },
  ];

  imageSrc = './assets/images/load.gif';
  isImageLoading = true;

  @Input() collection!: CollectionInterface;

  @ViewChild('dialog') dialogComponent!: ComponentType<unknown>;

  constructor(
    public dialogService: DialogService,
    private collectionRequestService: CollectionRequestService,
    private snackBarService: SnackBarService,
    private collectionService: CollectionService,
    private imageRequestService: ImageRequestService
  ) {}

  ngOnInit() {
    this.imageRequestService.getImage(this.collection.id).subscribe((image) => {
      this.isImageLoading = false;
      this.imageSrc = image;
    });
  }

  remove() {
    this.collectionRequestService
      .removeCollection(this.collection.id)
      .subscribe(() => {
        this.collectionService.updaterCollections$.next();
        this.snackBarService.openSnackBar('Successfully deleted!', {
          panelClass: ColorsEnum.Success,
        });
      });
  }
}
