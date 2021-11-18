import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { ItemInterface } from '@shared/interfaces/item.interface';
import { DialogInterface } from '@shared/interfaces/dialog.interface';
import { DialogService } from '@core/services/dialog.service';
import { SnackBarService } from '@core/services/snack-bar.service';
import { ItemsService } from '@core/services/items.service';

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
    private snackBarService: SnackBarService
  ) {}

  confirmRemove() {
    this.dialogService.openDialog(this.dialogComponent);
  }

  remove() {
    this.itemsService.removeItem(this.item.id).subscribe(() => {
      this.itemsService.updaterItems$.next();
      this.snackBarService.openSnackBar('Successfully deleted!');
    });
  }
}
