import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { TopicInterface } from '@shared/interfaces/topic.interface';
import { UppyService } from '@core/services/uppy.service';
import { from } from 'rxjs';
import { SnackBarService } from '@core/services/snack-bar.service';
import { TopicsService } from '@core/services/topics.service';
import { CollectionFormBodyInterface } from '@shared/interfaces/collection-form-body.interface';
import { SnackBarBodyInterface } from '@shared/interfaces/snackBar-body.interface';
import { ColorsEnum } from '@shared/enums/colors.enum';
import { CollectionsService } from '@core/services/collections.service';
import { CollectionInterface } from '@shared/interfaces/collection.interface';

@Component({
  selector: 'app-collection-card-form-section',
  templateUrl: './collection-section-card-form.component.html',
  styleUrls: ['./collection-section-card-form.component.scss'],
  providers: [UppyService],
})
export class CollectionSectionCardFormComponent implements OnInit, OnChanges {
  form!: FormGroup;
  topics: TopicInterface[] = [];
  @Input() collection?: CollectionInterface;

  @Input() buttonText = 'submit';
  @Input() title = 'Title';
  @Input() submit: Function = () => {};
  @Input() isNeedImage = true;
  @Input() success: SnackBarBodyInterface = { message: '' };
  @Input() error: SnackBarBodyInterface = { message: '' };

  constructor(
    private formBuilder: FormBuilder,
    private topicsService: TopicsService,
    private uppyService: UppyService,
    private snackBarService: SnackBarService,
    private collectionsService: CollectionsService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.collection) {
      this.createForm();
    }
  }

  ngOnInit() {
    this.topicsService
      .getTopics()
      .pipe(map((resp) => resp.msg))
      .subscribe((topics) => {
        this.topics = topics;
      });

    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      name: [this.collection?.name || '', [Validators.required]],
      id_topic: [this.collection?.id_topic || '', [Validators.required]],
      description: [this.collection?.description || ''],
    });
  }

  get name(): AbstractControl {
    return this.form.get('name')!;
  }

  get id_topic(): AbstractControl {
    return this.form.get('id_topic')!;
  }

  get description(): AbstractControl {
    return this.form.get('description')!;
  }

  get pending() {
    return this.form.pending;
  }

  resetForm() {
    this.uppyService.uppy.reset();
    this.form.reset();
  }

  private submitError() {
    const { message, config } = this.error;

    this.snackBarService.openSnackBar(message, config);

    this.resetForm();
  }

  private submitSuccess() {
    const { message, config } = this.success;

    this.snackBarService.openSnackBar(message, config);

    this.resetForm();

    this.collectionsService.updaterCollections$.next();
  }

  submitForm() {
    if (this.form.invalid) {
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

      this.form.markAsPending();

      from(this.uppyService.uppy.upload())
        .pipe(
          map((result) => {
            return result.successful[0].response?.body.msg;
          }),
          map((image) => {
            return <CollectionFormBodyInterface>(
              Object.assign(
                { image: (<any>image)?.originalname || '' },
                this.form.value
              )
            );
          }),
          switchMap((body) => {
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
            this.submitSuccess();
          }
        );
    } else {
      this.form.markAsPending();

      this.submit(this.form.value).subscribe(
        () => {},
        () => {
          this.submitError();
        },
        () => {
          this.submitSuccess();
        }
      );
    }
  }
}
