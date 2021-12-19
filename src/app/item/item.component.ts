import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { ItemInterface } from '../interfaces/item.interface';
import { DialogInterface } from '../dialog/interfaces/dialog.interface';
import { ItemsService } from '../items/services/items.service';
import { DialogService } from '../dialog/services/dialog.service';
import { SnackBarService } from '../services/snack-bar.service';
import { ItemRequestService } from './services/item-request.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @ViewChild('dialogComponent') dialogComponent!: TemplateRef<any>;

  @Input() item!: ItemInterface;

  dialog: DialogInterface = {
    title: 'Confirm removing item',
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
    private itemsService: ItemsService,
    private dialogService: DialogService,
    private snackBarService: SnackBarService,
    private itemRequestService: ItemRequestService
  ) {}

  confirmRemove() {
    this.dialogService.openDialog(this.dialogComponent);
  }

  remove() {
    this.itemRequestService.removeItem(this.item.id).subscribe(() => {
      this.itemsService.updaterItems$.next();
      this.snackBarService.openSnackBar('Successfully deleted!');
    });
  }
}
