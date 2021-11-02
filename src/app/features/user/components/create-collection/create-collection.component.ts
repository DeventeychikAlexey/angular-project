import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UppyService } from '@features/user/services/uppy/uppy.service';
import { Observable, PartialObserver } from 'rxjs';
import { UploadResult } from '@uppy/core';
import { CollectionsService } from '@core/services/collections/collections.service';
import { SnackbarService } from '@core/services/snackbar/snackbar.service';
import { TopicsService } from '@core/services/topics/topics.service';
import { TopicInterface } from '@shared/interfaces/topic.interface';
import { ResponseInterface } from '@core/interfaces/response.interface';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss'],
  providers: [UppyService],
})
export class CreateCollectionComponent implements OnInit {
  form!: FormGroup;
  topics: TopicInterface[] = [];
  constructor(
    private fb: FormBuilder,
    private uppyService: UppyService,
    private collectionsService: CollectionsService,
    private snackbarService: SnackbarService,
    private topicsService: TopicsService
  ) {
    const observer: PartialObserver<ResponseInterface> = {
      next: (data) => {
        this.topics = data.msg as TopicInterface[];
      },
    };
    this.topicsService.getTopics().subscribe(observer);
    this._createForm();
  }

  get pending(): boolean {
    return this.form.pending;
  }

  private _createForm(): void {
    this.form = this.fb.group({
      image: [null],
      name: [null, [Validators.required]],
      id_topic: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  private _createCollection(): void {
    const observer: PartialObserver<any> = {
      next: () => {
        this.collectionsService.updaterCollections.next();
      },
      error: () => {
        this.snackbarService.openSnackbar('Create error', {
          horizontal: 'end',
          vertical: 'bottom',
        });
      },
      complete: () => {
        this.snackbarService.openSnackbar('Successfully created', {
          horizontal: 'end',
          vertical: 'bottom',
        });
      },
    };
    this.collectionsService
      .createCollection(this.form.value)
      .subscribe(observer);
  }

  private _updateImageField(
    data: UploadResult<Record<string, unknown>, Record<string, any>>
  ) {
    return new Observable<any>((subscriber) => {
      const image: string =
        data?.successful[0]?.response?.body?.msg?.originalname;
      if (image?.length === 0) subscriber.error();
      this.form.patchValue({ image });
      subscriber.complete();
    });
  }

  private _resetForm(): void {
    this.uppyService.uppy.reset();
    this.form.reset();
  }

  submit(): void {
    if (this.form.invalid) return;
    this.form.markAsPending();
    const observer: PartialObserver<
      UploadResult<Record<string, unknown>, Record<string, any>>
    > = {
      next: (data) => {
        const observer = {
          error: () => {
            this.snackbarService.openSnackbar('Field with image error', {
              horizontal: 'end',
              vertical: 'bottom',
            });
          },
          complete: () => {
            this._createCollection();
          },
        };
        this._updateImageField(data).subscribe(observer);
      },
      error: () => {
        this.snackbarService.openSnackbar('Image error', {
          horizontal: 'end',
          vertical: 'bottom',
        });
        this._resetForm();
      },
      complete: () => {
        this._resetForm();
      },
    };
    this.uppyService.upload().subscribe(observer);
  }

  ngOnInit(): void {}
}
