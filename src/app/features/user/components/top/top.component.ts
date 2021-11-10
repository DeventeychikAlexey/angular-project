import { Component, Input } from '@angular/core';
import { LoginService } from '@core/services/login.service';
import { UserRightsService } from '@core/services/user-rights.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent {
  @Input() isMyPage = false;

  constructor(
    public loginService: LoginService,
    public userRightsService: UserRightsService
  ) {}
}
