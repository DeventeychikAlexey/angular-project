import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ItemInterface } from '../../interfaces/item.interface';
import { DialogActionInterface } from '../../../dialog/interfaces/dialog-action.interface';
import { DialogService } from '../../../dialog/services/dialog.service';
import { ComponentType } from '@angular/cdk/overlay';
import { ItemRequestService } from '../../services/item-request.service';
import { ColorsEnum } from '../../../../root/enums/colors.enum';
import { ItemService } from '../../services/item.service';
import { SnackBarService } from '../../../../root/services/snack-bar.service';
import { CommentRequestService } from '../../../comment/services/comment-request.service';
import { CommentService } from '../../../comment/services/comment.service';

@Component({
  providers: [CommentService],
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
    private snackBarService: SnackBarService,
    private commentRequestService: CommentRequestService,
    private commentService: CommentService
  ) {}

  ngOnInit() {
    this.commentRequestService
      .getItemComments(this.item.id)
      .subscribe((comments) => {
        this.commentService.comments = comments;
      });

    this.subscribeOnComments();
  }

  subscribeOnComments() {
    this.commentRequestService.getNewComments(this.item.id).subscribe(
      (comments) => {
        this.commentService.comments = comments;

        this.subscribeOnComments();
      },
      () => {
        setTimeout(() => {
          this.subscribeOnComments();
        }, 5000);
      }
    );
  }

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
