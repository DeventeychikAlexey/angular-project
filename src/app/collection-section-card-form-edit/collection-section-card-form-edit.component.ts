import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UppyService } from '../uppy/services/uppy.service';
import { CollectionInterface } from '../collection/interfaces/collection.interface';
import { UserInterface } from '../interfaces/user.interface';
import { ColorsEnum } from '../enums/colors.enum';
import { ResponseInterface } from '../interfaces/response.interface';
import { CollectionFormBodyInterface } from '../collection/interfaces/collection-form-body.interface';
import { CollectionRequestService } from '../collection/services/collection-request.service';

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

  constructor(private collectionRequestService: CollectionRequestService) {}

  submit(body: CollectionFormBodyInterface): Observable<ResponseInterface> {
    return this.collectionRequestService
      .editCollection(this.collection.id, body)
      .pipe(map((resp) => resp.msg));
  }
}
