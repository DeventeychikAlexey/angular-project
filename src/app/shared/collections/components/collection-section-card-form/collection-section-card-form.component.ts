import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { UppyService } from '../../../uppy/services/uppy.service';
import { TopicInterface } from '../../interfaces/topic.interface';
import { CollectionInterface } from '../../interfaces/collection.interface';
import { SnackBarBodyInterface } from '../../../../root/interfaces/snackBar-body.interface';
import { SnackBarService } from '../../../../root/services/snack-bar.service';
import { CollectionService } from '../../services/collection.service';
import { TopicsRequestService } from '../../services/topics-request.service';
import { ColorsEnum } from '../../../../root/enums/colors.enum';
import { TopicsService } from '../../services/topics.service';
import { CollectionFormBodyInterface } from '../../interfaces/collection-form-body.interface';

@Component({
  selector: 'app-collection-card-form-section',
  templateUrl: './collection-section-card-form.component.html',
  styleUrls: ['./collection-section-card-form.component.scss'],
  providers: [UppyService],
})
export class CollectionSectionCardFormComponent implements OnInit {
  formGroup!: FormGroup;
  topics: TopicInterface[] = [];

  @Input() collection?: CollectionInterface;
  @Input() buttonText?: string;
  @Input() title?: string;
  @Input() isNeedImage = true;
  @Input() success: SnackBarBodyInterface = { message: '' };
  @Input() error: SnackBarBodyInterface = { message: '' };

  constructor(
    private formGroupBuilder: FormBuilder,
    private topicsRequestService: TopicsRequestService,
    public topicsService: TopicsService,
    private uppyService: UppyService,
    private snackBarService: SnackBarService,
    private collectionService: CollectionService
  ) {}

  @Input() submit: Function = () => {};

  ngOnInit() {
    this.createForm();
  }

  resetForm() {
    this.uppyService.uppy.reset();
    this.formGroup.reset();
  }

  submitForm() {
    if (this.formGroup.invalid) {
      return;
    }

    if (
      this.isNeedImage ||
      (!this.isNeedImage && this.uppyService.uppy.getFiles().length > 0)
    ) {
      if (this.uppyService.uppy.getFiles().length === 0) {
        this.snackBarService.openSnackBar('You have to select an image', {
          panelClass: ColorsEnum.Error,
        });

        return;
      }

      this.formGroup.markAsPending();

      from(this.uppyService.uppy.upload())
        .pipe(
          switchMap((result) => {
            const body = <CollectionFormBodyInterface>Object.assign(
              {
                image:
                  (<{ originalname: string }>(
                    result.successful[0].response?.body
                  )).originalname || '',
              },
              this.formGroup.value
            );

            if (typeof body.image != 'string') {
              throw new Error();
            }

            return this.submit(body);
          })
        )
        .subscribe(
          () => {},
          () => {
            this.submitError();
          },
          () => {
            this.collectionService.goToUserPage().then(() => {
              this.submitSuccess();
            });
          }
        );
    } else {
      this.formGroup.markAsPending();

      this.submit(this.formGroup.value).subscribe(
        () => {},
        () => {
          this.submitError();
        },
        () => {
          this.collectionService.goToUserPage().then(() => {
            this.submitSuccess();
          });
        }
      );
    }
  }

  private createForm() {
    this.formGroup = this.formGroupBuilder.group({
      name: [this.collection?.name || '', [Validators.required]],
      id_topic: [this.collection?.id_topic || '', [Validators.required]],
      description: [this.collection?.description || ''],
    });
  }

  private submitError() {
    const { message, config } = this.error;

    this.snackBarService.openSnackBar(message, config);

    this.resetForm();
  }

  private submitSuccess() {
    const { message, config } = this.success;

    this.snackBarService.openSnackBar(message, config);

    this.collectionService.updaterCollections$.next();
  }
}
