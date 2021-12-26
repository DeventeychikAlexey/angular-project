import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouteInterface } from '../interfaces/route.interface';
import { UserService } from '../../../shared/user/services/user.service';
import { LoginService } from '../../../features/authorization-feature/services/login.service';
import { SnackBarService } from '../../services/snack-bar.service';
import { ColorsEnum } from '../../enums/colors.enum';

function noop() {}

@Injectable({ providedIn: 'root' })
export class HeaderService implements OnDestroy {
  routes: RouteInterface[] = [];
  menuActivated = false;
  headerUpdateSubscription: Subscription;

  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private snackBarService: SnackBarService
  ) {
    this.headerUpdateSubscription =
      this.userService.needsUpdateHeader$.subscribe(() => {
        this.updateRoutes();
      });

    this.userService.needsUpdateHeader$.next();
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
        route: `/guest/home`,
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
          route: `/user/${this.userService.user!.id}`,
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
    this.loginService.logout();
    this.snackBarService.openSnackBar("You're logged out", {
      panelClass: ColorsEnum.Success,
    });
  }

  ngOnDestroy() {
    this.headerUpdateSubscription.unsubscribe();
  }
}
