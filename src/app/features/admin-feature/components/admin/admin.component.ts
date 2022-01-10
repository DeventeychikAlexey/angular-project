import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserInterface } from '../../../../shared/user/interfaces/user.interface';
import { UserService } from '../../../../shared/user/services/user.service';
import { ListService } from '../../../../shared/list/services/list.service';
import { MatSort } from '@angular/material/sort';
import { AdminRequestService } from '../../services/admin-request.service';
import { UserRequestService } from '../../../../shared/user/services/user-request.service';
import { SnackBarService } from '../../../../root/services/snack-bar.service';
import { tap } from 'rxjs/operators';
import { ColorsEnum } from '../../../../root/enums/colors.enum';
import { concat, Observable } from 'rxjs';

@Component({
  providers: [ListService],
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements AfterViewInit, OnInit {
  displayedColumns = [
    'name',
    'right',
    'upgrade',
    'downgrade',
    'block',
    'delete',
  ];
  dataSource!: MatTableDataSource<UserInterface>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public userService: UserService,
    private userRequestService: UserRequestService,
    private adminRequestService: AdminRequestService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit() {
    this.dataSource = this.createTableDataSource();
  }

  ngAfterViewInit() {
    this.updateTableSettings();
  }

  updateTableSettings() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createTableDataSource(): MatTableDataSource<any> {
    return new MatTableDataSource<UserInterface>(this.userService.users);
  }

  updateUsers(): Observable<UserInterface[]> {
    return this.userRequestService.getUsers().pipe(
      tap((users) => {
        this.userService.users = users;
      })
    );
  }

  upgrade(user: UserInterface) {
    concat(
      this.adminRequestService.upgradeUser(user),
      this.updateUsers()
    ).subscribe(
      () => {},
      () => {
        this.snackBarService.openSnackBar('Upgrade error', {
          panelClass: ColorsEnum.Error,
        });
      },
      () => {
        this.actionCompleted('Successfully upgraded');
      }
    );
  }

  downgrade(user: UserInterface) {
    concat(
      this.adminRequestService.downgradeUser(user),
      this.updateUsers()
    ).subscribe(
      () => {},
      () => {
        this.snackBarService.openSnackBar('Downgrade error', {
          panelClass: ColorsEnum.Error,
        });
      },
      () => {
        this.actionCompleted('Successfully downgraded');
      }
    );
  }

  toggleBlocked(user: UserInterface) {
    concat(
      this.adminRequestService.toggleBlocked(user),
      this.updateUsers()
    ).subscribe(
      () => {},
      () => {
        this.snackBarService.openSnackBar(
          `${user.blocked ? 'Unblocking' : 'Blocking'} error`,
          {
            panelClass: ColorsEnum.Error,
          }
        );
      },
      () => {
        this.actionCompleted(
          `Successfully ${user.blocked ? 'Unblocked' : 'Blocked'}`
        );
      }
    );
  }

  delete(user: UserInterface) {
    concat(
      this.adminRequestService.deleteUser(user),
      this.updateUsers()
    ).subscribe(
      () => {},
      () => {
        this.snackBarService.openSnackBar(`Deleting error`, {
          panelClass: ColorsEnum.Error,
        });
      },
      () => {
        this.actionCompleted('Successfully deleted');
      }
    );
  }

  actionCompleted(text: string) {
    this.dataSource = this.createTableDataSource();

    this.updateTableSettings();

    this.snackBarService.openSnackBar(text);
  }
}
