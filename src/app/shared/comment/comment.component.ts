import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentRequestService } from './services/comment-request.service';
import { CommentService } from './services/comment.service';
import * as m from 'moment';
import { SnackBarService } from '../../root/services/snack-bar.service';
import { ColorsEnum } from '../../root/enums/colors.enum';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  formGroup!: FormGroup;
  moment = m;

  @Input() id!: number;

  constructor(
    private formBuilder: FormBuilder,
    private commentRequestService: CommentRequestService,
    public commentService: CommentService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit() {
    this.formGroup = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({ comment: ['', Validators.required] });
  }

  submit() {
    if (this.formGroup.invalid) {
      return;
    }

    this.formGroup.markAsPending();

    this.commentRequestService
      .createComment(this.id, this.formGroup.value)
      .subscribe(
        () => {},
        () => {
          this.snackBarService.openSnackBar('Sending comment error', {
            panelClass: ColorsEnum.Error,
          });
          this.formGroup.reset();
        },
        () => {
          this.formGroup.reset();
        }
      );
  }
}
