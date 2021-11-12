import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CollectionsService } from '@core/services/collections.service';
import { DialogService } from '@core/services/dialog.service';
import { SnackBarService } from '@core/services/snack-bar.service';

import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { DialogInterface } from '@shared/interfaces/dialog.interface';
import { ImagesService } from '@core/services/images.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  @ViewChild('dialogComponent') dialogComponent!: TemplateRef<any>;

  @Input()
  collection!: CollectionInterface;

  image: string = '';
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
    private dialogService: DialogService,
    private snackBarService: SnackBarService,
    private imagesService: ImagesService
  ) {
    this.image = this.imagesService.pathToLoadingImage;
  }

  ngOnInit() {
    this.imagesService
      .getImage(this.collection.id)
      .subscribe((data) => (this.image = <string>data.msg));
  }

  confirmRemove() {
    this.dialogService.openDialog(this.dialogComponent);
  }

  remove() {
    this.collectionsService
      .removeCollection(this.collection.id)
      .subscribe(() => {
        this.collectionsService.updaterCollections$.next();
        this.snackBarService.openSnackBar('Successfully deleted!');
      });
  }
}
