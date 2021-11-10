import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagesService } from '@core/services/pages.service';
import { UserRightsService } from '@core/services/user-rights.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  idPage = -1;

  constructor(
    public pagesService: PagesService,
    private activatedRoute: ActivatedRoute,
    private userRightsService: UserRightsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.idPage = +params.id;
      }
    });
  }

  get isEditable() {
    return (
      this.userRightsService.isAdminRights ||
      this.pagesService.isMyPage(this.idPage)
    );
  }
}
