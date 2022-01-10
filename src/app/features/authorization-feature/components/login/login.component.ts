import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../../../shared/user/services/user.service';
import { SnackBarService } from '../../../../root/services/snack-bar.service';
import { FormsErrorService } from '../../../../shared/forms/services/forms-error.service';
import { Subscription } from 'rxjs';
import { ColorsEnum } from '../../../../root/enums/colors.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  formGroup: FormGroup;
  loginSubscription?: Subscription;

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private snackBarService: SnackBarService,
    public formsErrorService: FormsErrorService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      login: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(32),
        ],
      ],
    });
  }

  submit() {
    if (this.formGroup.invalid) {
      return;
    }

    this.formGroup.markAsPending();

    this.loginSubscription = this.loginService
      .login(this.formGroup.value)
      .subscribe(
        () => {},
        () => {
          this.snackBarService.openSnackBar('Invalid data', {
            panelClass: ColorsEnum.Error,
          });

          this.formGroup.reset();
          this.loginService.logout();
        },
        () => {
          this.userService.needsUpdateHeader$.next();

          this.userService
            .goToUserPage()
            .then(() => {
              this.snackBarService.openSnackBar("You're logged in", {
                panelClass: ColorsEnum.Success,
              });
            })
            .catch(() => {
              this.snackBarService.navigationError();
              this.formGroup.reset();
              this.loginService.logout();
            });
        }
      );
  }

  ngOnDestroy() {
    this.loginSubscription?.unsubscribe();
  }
}
