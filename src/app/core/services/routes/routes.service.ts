import { Injectable, OnDestroy } from '@angular/core';
import { RouteInterface } from '@core/interfaces/route.interface';
import { AuthService } from '@core/services/auth/auth.service';
import { Subject, Subscription, TeardownLogic } from 'rxjs';

function noop(): void {}

@Injectable()
export class RoutesService implements OnDestroy {
  routes: RouteInterface[] = [];
  subject: Subject<TeardownLogic> = new Subject<TeardownLogic>();
  private subscription: Subscription;

  constructor(private authService: AuthService) {
    const observer = {
      next: this.updateRoutes.bind(this),
      error: () => {},
      complete: () => {},
    };
    this.subscription = this.subject.subscribe(observer);
    this.subject.next();
  }

  private updateRoutes(): void {
    let loggedInRoutes: RouteInterface[] = [
      {
        route: '/auth/login',
        title: 'Logout',
        handler: this.logout.bind(this),
      },
    ];
    if (typeof this.authService.user === 'object')
      setTimeout(
        () =>
          loggedInRoutes.push({
            route: `/user/${this.authService.user!.id}`,
            title: 'My page',
            handler: noop,
          }),
        0
      );

    if (!this.authService.isLoggedIn)
      loggedInRoutes = [
        { route: '/auth/login', title: 'Sign in', handler: noop },
        { route: '/auth/register', title: 'Sign on', handler: noop },
      ];

    setTimeout(() => (this.routes = [...loggedInRoutes].reverse()), 0);
  }

  private logout(): void {
    this.authService.removeToken().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
