import { Component, OnInit } from '@angular/core';
import { RoutesService } from '@core/services/routes/routes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public routesService: RoutesService) {}

  ngOnInit(): void {}
}
