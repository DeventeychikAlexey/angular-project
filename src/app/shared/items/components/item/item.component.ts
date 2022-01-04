import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ItemInterface } from '../../interfaces/item.interface';
import { DialogActionInterface } from '../../../dialog/interfaces/dialog-action.interface';
import { DialogService } from '../../../dialog/services/dialog.service';
import { ComponentType } from '@angular/cdk/overlay';
import { ItemRequestService } from '../../services/item-request.service';
import { ColorsEnum } from '../../../../root/enums/colors.enum';
import { ItemService } from '../../services/item.service';
import { SnackBarService } from '../../../../root/services/snack-bar.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  actions: DialogActionInterface[] = [
    {
      title: 'Remove',
      handler: this.remove.bind(this),
      color: 'warn',
    },
  ];

  @Input() item!: ItemInterface;

  @ViewChild('dialog') dialogComponent!: ComponentType<unknown>;

  constructor(
    public dialogService: DialogService,
    private itemRequestService: ItemRequestService,
    private itemService: ItemService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit() {}

  remove() {
    this.itemRequestService.removeItem(this.item.id).subscribe(() => {
      this.itemService.updaterItems$.next();
      this.snackBarService.openSnackBar('Successfully deleted!', {
        panelClass: ColorsEnum.Success,
      });
      this.itemService.goToCollectionPage().then();
    });
  }
}
