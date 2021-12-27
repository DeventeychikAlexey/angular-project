import { Component, Input } from '@angular/core';
import { UppyService } from '../../../uppy/services/uppy.service';
import { CollectionInterface } from '../../interfaces/collection.interface';
import { ColorsEnum } from '../../../../root/enums/colors.enum';
import { CollectionRequestService } from '../../services/collection-request.service';
import { CollectionFormBodyInterface } from '../../interfaces/collection-form-body.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-collection-section-card-form-edit',
  templateUrl: './collection-section-card-form-edit.component.html',
  styleUrls: ['./collection-section-card-form-edit.component.scss'],
  providers: [UppyService],
})
export class CollectionSectionCardFormEditComponent {
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

  submit(body: CollectionFormBodyInterface): Observable<CollectionInterface> {
    return this.collectionRequestService.editCollection(
      this.collection.id,
      body
    );
  }
}
