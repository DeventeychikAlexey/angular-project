import { Component, Input } from '@angular/core';
import { CollectionFormButtonInterface } from '@shared/interfaces/collection-form-button.interface';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TopicInterface } from '@shared/interfaces/topic.interface';
import { UppyService } from '@features/user/services/uppy/uppy.service';
import { CollectionsService } from '@core/services/collections.service';
import { SnackBarService } from '@core/services/snack-bar.service';
import { TopicsService } from '@core/services/topics.service';
import { from, of } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-collection-form-card',
  templateUrl: './collection-form-card.component.html',
  styleUrls: ['./collection-form-card.component.scss'],
  providers: [UppyService],
})
export class CollectionFormCardComponent {
  @Input() submit: Function = () => {};
  @Input() button?: CollectionFormButtonInterface;
  @Input() collectionId = -1;
  @Input() isImageRequired = true;

  form!: FormGroup;
  topics: TopicInterface[] = [];
  buttonDefault: CollectionFormButtonInterface = {
    color: 'primary',
    text: 'Do something',
  };

  constructor(
    private formBuilder: FormBuilder,
    private uppyService: UppyService,
    private collectionsService: CollectionsService,
    private snackBarService: SnackBarService,
    private topicsService: TopicsService
  ) {
    this.updateTopics();
  }

  ngOnInit() {
    this.createForm();
  }

  private updateTopics() {
    this.topicsService.getTopics().subscribe((data) => {
      this.topics = data.msg as TopicInterface[];
    });
  }

  get image(): AbstractControl {
    return this.form.get('image')!;
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

  private createForm() {
    this.form = this.formBuilder.group({
      image: [null],
      name: [null, [Validators.required]],
      id_topic: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  private resetForm() {
    this.uppyService.uppy.reset();
    this.form.reset();
  }

  submitForm() {
    // if (this.form.invalid) {
    //   return;
    // }

    this.form.markAsPending();

    if (this.isImageRequired) {
      from(this.uppyService.uppy.upload()).subscribe(
        () => {},
        () => {
          this.resetForm();
        },
        () => {
          this.resetForm();
        }
      );
    } else {
      of(this.submit(this.form)).subscribe(
        () => console.log('hi'),
        () => {
          this.resetForm();
        },
        () => {
          this.resetForm();
        }
      );
    }

    // from(this.uppyService.uppy.upload()).subscribe((data)=>{
    //   data.successful[0].response?.body?.msg?.originalname
    //     .pipe(map((data) => data.successful[0].response!.body.msg.originalname))
    //     .subscribe(
    //       (image) => {
    //         this.updateImageField(image).subscribe(
    //           (image) => {
    //             this.for  m.patchValue({ image });
    //           },
    //           () => {
    //             this.snackBarService.openSnackBar('Field with image has error', {
    //               panelClass: ColorsEnum.Error,
    //             });
    //           },
    //           () => {
    //             this.submit(this.form);
    //           }
    //         );
    //       },
    //       () => {
    //         this.snackBarService.openSnackBar('Try another image', {
    //           panelClass: ColorsEnum.Error,
    //         });
    //         this.resetForm();
    //       },
    //       () => {
    //         this.resetForm();
    //       }
    //     );
  }
}
