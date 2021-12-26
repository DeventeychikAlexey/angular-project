import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../../shared/collections/services/collection.service';
import { UserService } from '../../../../shared/user/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(
    public collectionService: CollectionService,
    public userService: UserService
  ) {}

  ngOnInit() {}
}
