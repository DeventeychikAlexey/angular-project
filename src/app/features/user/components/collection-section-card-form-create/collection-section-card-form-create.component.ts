import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionFormBodyInterface } from '@shared/interfaces/collection-form-body.interface';
import { CollectionsService } from '@core/services/collections.service';
import { map } from 'rxjs/operators';
import { ColorsEnum } from '@shared/enums/colors.enum';
import { UserInterface } from '@shared/interfaces/user.interface';
import { UppyService } from '@core/services/uppy.service';
import { ResponseInterface } from '@shared/interfaces/response.interface';

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

  constructor(private collectionsService: CollectionsService) {}

  submit(body: CollectionFormBodyInterface): Observable<ResponseInterface> {
    return this.collectionsService
      .createCollection(this.user.id, body)
      .pipe(map((resp) => resp.msg));
  }
}
