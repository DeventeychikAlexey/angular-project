import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { RoutesService } from '@core/services/routes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showFooter = true;

  constructor(private router: Router, public routesService: RoutesService) {
    this.updateShowFooter();
  }

  updateShowFooter() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.showFooter = true;

        if (data.state.root.firstChild?.data?.showFooter === false) {
          this.showFooter = false;
        }
      }
    });
  }
}
