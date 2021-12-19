import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UppyService } from '../uppy/services/uppy.service';
import { UserInterface } from '../interfaces/user.interface';
import { ColorsEnum } from '../enums/colors.enum';
import { ResponseInterface } from '../interfaces/response.interface';
import { CollectionFormBodyInterface } from '../collection/interfaces/collection-form-body.interface';
import { CollectionRequestService } from '../collection/services/collection-request.service';

@Component({
  selector: 'app-collection-section-card-form-create',
  templateUrl: './collection-section-card-form-create.component.html',
  styleUrls: ['./collection-section-card-form-create.component.scss'],
  providers: [UppyService],
})
export class CollectionSectionCardFormCreateComponent {
  @Input() user!: UserInterface;
  error = {
    message: 'Creating error',
    config: {
      panelClass: ColorsEnum.Error,
    },
  };

  success = {
    message: 'Successfully created',
    config: {
      panelClass: ColorsEnum.Success,
    },
  };

  constructor(private collectionRequestService: CollectionRequestService) {}

  submit(body: CollectionFormBodyInterface): Observable<ResponseInterface> {
    return this.collectionRequestService
      .createCollection(this.user.id, body)
      .pipe(map((resp) => resp.msg));
  }
}
