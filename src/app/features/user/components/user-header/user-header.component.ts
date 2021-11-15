import { Component, Input } from '@angular/core';
import { UserInterface } from '@shared/interfaces/user.interface';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss'],
})
export class UserHeaderComponent {
  @Input() user!: UserInterface;
}
