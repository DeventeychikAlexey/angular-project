import { Component, Input } from '@angular/core';
import { ColorsEnum } from '../../../../root/enums/colors.enum';
import { ItemRequestService } from '../../services/item-request.service';
import { ItemFormBodyInterface } from '../../interfaces/item-form-body.interface';
import { Observable } from 'rxjs';
import { ItemInterface } from '../../interfaces/item.interface';

@Component({
  selector: 'app-item-section-card-form-edit',
  templateUrl: './item-section-card-form-edit.component.html',
  styleUrls: ['./item-section-card-form-edit.component.scss'],
})
export class ItemSectionCardFormEditComponent {
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

  @Input() item!: ItemInterface;

  constructor(private itemRequestService: ItemRequestService) {}

  submit(body: ItemFormBodyInterface): Observable<ItemInterface> {
    return this.itemRequestService.editItem(this.item.id, body);
  }
}
