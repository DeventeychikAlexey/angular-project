import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showFooter = true;

  constructor(private router: Router) {
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
