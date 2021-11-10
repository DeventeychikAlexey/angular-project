import { Component } from '@angular/core';
import { ColorsEnum } from '@shared/enums/colors.enum';
import { CollectionsService } from '@core/services/collections.service';
import { FormGroup } from '@angular/forms';
import { SnackBarService } from '@core/services/snack-bar.service';
import { CollectionFormButtonInterface } from '@shared/interfaces/collection-form-button.interface';

@Component({
  selector: 'app-create-collection',
  templateUrl: './collection-create.component.html',
  styleUrls: ['./collection-create.component.scss'],
})
export class CollectionCreateComponent {
  button: CollectionFormButtonInterface = {
    text: 'Create',
  };

  constructor(
    private collectionsService: CollectionsService,
    private snackBarService: SnackBarService
  ) {}

  submit(form: FormGroup) {
    console.log('hey');
    // this.collectionsService.createCollection(form.value).subscribe(
    //   () => {
    //     this.collectionsService.updaterCollections$.next();
    //   },
    //   () => {
    //     this.snackBarService.openSnackBar('Try to create again', {
    //       panelClass: ColorsEnum.Error,
    //     });
    //   },
    //   () => {
    //     this.snackBarService.openSnackBar('Successfully created', {
    //       panelClass: ColorsEnum.Success,
    //     });
    //   }
    // );
  }
}
