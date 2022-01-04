import { Component } from '@angular/core';
import { ColorsEnum } from '../../../../root/enums/colors.enum';
import { ItemRequestService } from '../../services/item-request.service';
import { ItemFormBodyInterface } from '../../interfaces/item-form-body.interface';
import { Observable } from 'rxjs';
import { ItemInterface } from '../../interfaces/item.interface';
import { CollectionService } from '../../../collections/services/collection.service';

@Component({
  selector: 'app-item-section-card-form-create',
  templateUrl: './item-section-card-form-create.component.html',
  styleUrls: ['./item-section-card-form-create.component.scss'],
})
export class ItemSectionCardFormCreateComponent {
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
    private itemRequestService: ItemRequestService,
    private collectionService: CollectionService
  ) {}

  submit(body: ItemFormBodyInterface): Observable<ItemInterface> {
    return this.itemRequestService.createItem(
      this.collectionService.collection!.id,
      body
    );
  }
}
