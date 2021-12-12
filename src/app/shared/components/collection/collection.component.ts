import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DialogService } from '@core/services/dialog.service';
import { SnackBarService } from '@core/services/snack-bar.service';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { DialogInterface } from '@shared/interfaces/dialog.interface';
import { ImagesService } from '@core/services/images.service';
import { CollectionsRequestService } from '@requests/services/collections-request.service';
import { CollectionsService } from '@core/services/collections.service';
import { ImagesRequestService } from '@requests/services/images-request.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit, OnChanges {
  @ViewChild('dialogComponent') dialogComponent!: TemplateRef<any>;

  @Input()
  collection!: CollectionInterface;

  image = '';
  isImageLoading = true;

  dialog: DialogInterface = {
    title: 'Confirm removing',
    text: 'Are you sure?',
    actions: [
      {
        title: 'Remove',
        handler: this.remove.bind(this),
        color: 'warn',
      },
    ],
  };

  constructor(
    private collectionsService: CollectionsService,
    private collectionsRequestService: CollectionsRequestService,
    private dialogService: DialogService,
    private snackBarService: SnackBarService,
    private imagesService: ImagesService,
    private imagesRequestService: ImagesRequestService
  ) {
    this.image = this.imagesService.pathToLoadingImage;
  }

  get linkToCollectionPage() {
    return (
      '/user/' + this.collection.id_user + '/collection/' + this.collection.id
    );
  }

  get linkToCollectionPageEditing() {
    return this.linkToCollectionPage + '/edit';
  }

  ngOnInit() {
    this.getImage();
  }

  private getImage() {
    this.isImageLoading = true;

    this.imagesRequestService.getImage(this.collection.id).subscribe((data) => {
      this.image = <string>data.msg;

      this.isImageLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.collection.currentValue?.image !=
      changes.collection.previousValue?.image
    ) {
      this.getImage();
    }
  }

  get currentImage() {
    if (this.isImageLoading) {
      return this.imagesService.pathToLoadingImage;
    }

    return this.image;
  }

  confirmRemove() {
    this.dialogService.openDialog(this.dialogComponent);
  }

  remove() {
    this.collectionsRequestService
      .removeCollection(this.collection.id)
      .subscribe(() => {
        this.collectionsService.updaterCollections$.next();
        this.snackBarService.openSnackBar('Successfully deleted!');
      });
  }
}
