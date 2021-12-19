import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DialogInterface } from '../dialog/interfaces/dialog.interface';
import { CollectionInterface } from './interfaces/collection.interface';
import { DialogService } from '../dialog/services/dialog.service';
import { SnackBarService } from '../services/snack-bar.service';
import { ImageRequestService } from './services/image-request.service';
import { ImageService } from './services/image.service';
import { CollectionRequestService } from './services/collection-request.service';
import { CollectionsService } from '../collections/services/collections.service';

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
    private collectionRequestService: CollectionRequestService,
    private dialogService: DialogService,
    private snackBarService: SnackBarService,
    private imagesService: ImageService,
    private imagesRequestService: ImageRequestService
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
    this.collectionRequestService
      .removeCollection(this.collection.id)
      .subscribe(() => {
        this.collectionsService.updaterCollections$.next();
        this.snackBarService.openSnackBar('Successfully deleted!');
      });
  }
}
