import { Component } from '@angular/core';
import { UppyService } from '../../../uppy/services/uppy.service';
import { ColorsEnum } from '../../../../root/enums/colors.enum';
import { CollectionRequestService } from '../../services/collection-request.service';
import { CollectionFormBodyInterface } from '../../interfaces/collection-form-body.interface';
import { Observable } from 'rxjs';
import { UserService } from '../../../user/services/user.service';
import { CollectionInterface } from '../../interfaces/collection.interface';

@Component({
  selector: 'app-collection-section-card-form-create',
  templateUrl: './collection-section-card-form-create.component.html',
  styleUrls: ['./collection-section-card-form-create.component.scss'],
  providers: [UppyService],
})
export class CollectionSectionCardFormCreateComponent {
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

  constructor(
    private collectionRequestService: CollectionRequestService,
    private userService: UserService
  ) {}

  submit(body: CollectionFormBodyInterface): Observable<CollectionInterface> {
    return this.collectionRequestService.createCollection(
      this.userService.user!.id,
      body
    );
  }
}
