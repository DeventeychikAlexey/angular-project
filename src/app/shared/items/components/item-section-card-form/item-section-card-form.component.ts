import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SnackBarBodyInterface } from '../../../../root/interfaces/snackBar-body.interface';
import { ItemInterface } from '../../interfaces/item.interface';
import { CollectionService } from '../../../collections/services/collection.service';
import { SnackBarService } from '../../../../root/services/snack-bar.service';
import { ItemService } from '../../services/item.service';
import { ItemFormService } from '../../services/item-form.service';

@Component({
  providers: [ItemFormService],
  selector: 'app-item-section-card-form',
  templateUrl: './item-section-card-form.component.html',
  styleUrls: ['./item-section-card-form.component.scss'],
})
export class ItemSectionCardFormComponent implements OnInit {
  @Input() item?: ItemInterface;
  @Input() buttonText?: string;
  @Input() title?: string;
  @Input() success: SnackBarBodyInterface = { message: '' };
  @Input() error: SnackBarBodyInterface = { message: '' };

  constructor(
    private formBuilder: FormBuilder,
    private collectionService: CollectionService,
    private snackBarService: SnackBarService,
    private itemService: ItemService,
    public itemFormService: ItemFormService
  ) {}

  @Input() submit: Function = () => {};

  ngOnInit() {
    this.itemFormService.createForm(this.item);
  }

  submitForm() {
    if (this.itemFormService.formGroup.invalid) {
      return;
    }

    this.itemFormService.formGroup.markAsPending();

    this.submit(this.itemFormService.formGroup.value).subscribe(
      () => {},
      () => {
        const { message, config } = this.error;

        this.snackBarService.openSnackBar(message, config);

        this.itemFormService.formGroup.reset();
      },
      () => {
        this.itemService.goToCollectionPage().then(() => {
          const { message, config } = this.success;

          this.snackBarService.openSnackBar(message, config);

          this.itemService.updaterItems$.next();
        });
      }
    );
  }
}
