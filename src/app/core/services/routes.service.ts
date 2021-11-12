import { Injectable, OnDestroy } from '@angular/core';

import { LoginService } from '@core/services/login.service';

import { RouteInterface } from '@shared/interfaces/route.interface';

import { of, Subscription } from 'rxjs';
import { SnackBarService } from '@core/services/snack-bar.service';

function noop(): void {}

@Injectable()
export class RoutesService implements OnDestroy {
  routes: RouteInterface[] = [];
  menuActivated = false;
  private subscription: Subscription;

  constructor(
    private loginService: LoginService,
    private snackBarService: SnackBarService
  ) {
    this.subscription = this.loginService.needRoutesUpdate$.subscribe(() => {
      this.updateRoutes();
    });

    this.loginService.needRoutesUpdate$.next();
  }

  toggleMenu() {
    if (this.menuActivated) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  closeMenu() {
    this.menuActivated = false;
  }

  openMenu() {
    this.menuActivated = true;
  }

  private updateRoutes() {
    let routes: RouteInterface[] = [
      {
        route: `/`,
        title: 'Home',
        handler: noop,
      },
    ];

    let loggedInRoutes: RouteInterface[];

    if (this.loginService.isLoggedIn) {
      loggedInRoutes = [
        {
          route: '/auth/login',
          title: 'Logout',
          handler: this.logout.bind(this),
        },
        {
          route: `/user/${this.loginService.user!.id}`,
          title: 'My page',
          handler: noop,
        },
      ];
    } else {
      loggedInRoutes = [
        { route: '/auth/register', title: 'Register', handler: noop },
        { route: '/auth/login', title: 'Log in', handler: noop },
      ];
    }

    this.routes = [...loggedInRoutes, ...routes].reverse();
  }

  logout() {
    of(this.loginService.logout()).subscribe(() => {
      this.snackBarService.openSnackBar("You're logged out");
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
