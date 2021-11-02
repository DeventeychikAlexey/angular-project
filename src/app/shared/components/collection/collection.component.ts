import {
  Component,
  OnInit,
  Input,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { CollectionsService } from '@core/services/collections/collections.service';
import { DialogService } from '@core/services/dialog.service';
import { DialogInterface } from '@shared/interfaces/dialog.interface';
import { SnackbarService } from '@core/services/snackbar/snackbar.service';

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
    private snackbarService: SnackbarService
  ) {
    this.image = this.collectionsService.thumbnail;
  }

  ngOnInit(): void {
    this.collectionsService
      .getImage(this.collection.id)
      .subscribe((data) => (this.image = <string>data.msg));
  }

  confirmRemove() {
    this.dialogService.openDialog(this.dialogComponent);
  }

  remove() {
    this.collectionsService
      .removeCollection(this.collection.id, { name: 'user' })
      .subscribe(() => {
        this.collectionsService.updaterCollections.next();
        this.snackbarService.openSnackbar('Succesfully deleted!', {
          horizontal: 'end',
          vertical: 'bottom',
        });
      });
  }
}
