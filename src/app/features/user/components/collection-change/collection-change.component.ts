import { Component } from '@angular/core';
import { CollectionFormButtonInterface } from '@shared/interfaces/collection-form-button.interface';
import { CollectionsService } from '@core/services/collections.service';
import { SnackBarService } from '@core/services/snack-bar.service';
import { FormGroup } from '@angular/forms';
import { ColorsEnum } from '@shared/enums/colors.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-change',
  templateUrl: './collection-change.component.html',
  styleUrls: ['./collection-change.component.scss'],
})
export class CollectionChangeComponent {
  button: CollectionFormButtonInterface = {
    color: 'accent',
    text: 'Change',
  };

  constructor(
    private collectionsService: CollectionsService,
    private snackBarService: SnackBarService,
    private route: Router
  ) {}

  submit(form: FormGroup) {
    this.collectionsService.editCollection(form.value).subscribe(
      () => {
        // this.collectionsService.updaterCollections$.next();
      },
      () => {
        this.snackBarService.openSnackBar('Try to edit again', {
          panelClass: ColorsEnum.Error,
        });
      },
      () => {
        this.navigateToCollectionPage();
        this.snackBarService.openSnackBar('Successfully edited', {
          panelClass: ColorsEnum.Success,
        });
      }
    );
  }

  private navigateToCollectionPage() {
    // this.route.navigate()
  }
}
