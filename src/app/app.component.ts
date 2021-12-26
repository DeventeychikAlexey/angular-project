import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './features/authorization-feature/services/login.service';
import { LoginRequestService } from './features/authorization-feature/services/login-request.service';
import { UserService } from './shared/user/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  updaterHeader!: Subscription;

  constructor(
    private loginService: LoginService,
    private loginRequestService: LoginRequestService,
    private userService: UserService
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');

    if (!!token) {
      this.loginService.Token = token;

      this.updaterHeader = this.loginRequestService.getUserByToken().subscribe(
        (user) => {
          this.userService.user = user;

          this.userService.needsUpdateHeader$.next();
        },
        () => {
          this.loginService.logout();
        }
      );
    }
  }

  ngOnDestroy() {
    this.updaterHeader.unsubscribe();
  }
}
