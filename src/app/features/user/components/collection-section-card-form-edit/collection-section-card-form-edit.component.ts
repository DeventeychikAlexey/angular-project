import { Component, Input, OnInit } from '@angular/core';
import { UserInterface } from '@shared/interfaces/user.interface';
import { ColorsEnum } from '@shared/enums/colors.enum';
import { CollectionsService } from '@core/services/collections.service';
import { CollectionFormBodyInterface } from '@shared/interfaces/collection-form-body.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UppyService } from '@core/services/uppy.service';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { ResponseInterface } from '@shared/interfaces/response.interface';

@Component({
  selector: 'app-collection-section-card-form-edit',
  templateUrl: './collection-section-card-form-edit.component.html',
  styleUrls: ['./collection-section-card-form-edit.component.scss'],
  providers: [UppyService],
})
export class CollectionSectionCardFormEditComponent {
  @Input() user!: UserInterface;
  @Input() collection!: CollectionInterface;

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

  submit(body: CollectionFormBodyInterface): Observable<ResponseInterface> {
    return this.collectionsService
      .editCollection(this.collection.id, body)
      .pipe(map((resp) => resp.msg));
  }
}
