import { Component, Input, OnInit } from '@angular/core';
import { UserInterface } from '@shared/interfaces/user.interface';
import { ColorsEnum } from '@shared/enums/colors.enum';
import { CollectionsService } from '@core/services/collections.service';
import { CollectionFormBodyInterface } from '@shared/interfaces/collection-form-body.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-collection-section-card-form-edit',
  templateUrl: './collection-section-card-form-edit.component.html',
  styleUrls: ['./collection-section-card-form-edit.component.scss'],
})
export class CollectionSectionCardFormEditComponent {
  @Input() user!: UserInterface;

  error = {
    message: 'Editing error',
    config: {
      panelClass: ColorsEnum.Error,
    },
  };

  success = {
    message: 'Successfully edited',
    config: {
      panelClass: ColorsEnum.Success,
    },
  };

  constructor(private collectionsService: CollectionsService) {}

  submit(body: CollectionFormBodyInterface): Observable<any> {
    return this.collectionsService
      .createCollection(this.user.id, body)
      .pipe(map((resp) => resp.msg));
  }
}
