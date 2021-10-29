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
  private _menuActivated: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.userSubscriber.subscribe(this.updateRoutes.bind(this));
    const observer = {
      next: this.updateRoutes.bind(this),
      error: () => {},
      complete: () => {},
    };
    this.subscription = this.subject.subscribe(observer);
    this.subject.next();
  }

  get menuActivated(): boolean {
    return this._menuActivated;
  }

  toggleMenu(): void {
    this._menuActivated = !this._menuActivated;
  }

  private updateRoutes(): void {
    let loggedInRoutes: RouteInterface[] = [
      {
        route: '/auth/login',
        title: 'Logout',
        handler: this.logout.bind(this),
      },
      {
        route: `/user/${this.authService.user?.id}`,
        title: 'My page',
        handler: noop,
      },
    ];

    if (!this.authService.isLoggedIn)
      loggedInRoutes = [
        { route: '/auth/register', title: 'Register', handler: noop },
        { route: '/auth/login', title: 'Sign in', handler: noop },
      ];
    this.routes = [...loggedInRoutes].reverse();
  }

  private logout(): void {
    this.authService.removeToken().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
