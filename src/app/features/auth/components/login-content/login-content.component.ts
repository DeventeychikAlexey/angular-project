import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from '@core/services/snack-bar.service';
import { LoginService } from '@core/services/login.service';
import { ColorsEnum } from '@shared/enums/colors.enum';
import { FormErrorsEnum } from '@shared/enums/form-errors.enum';
import { FormLoginErrorsEnum } from '@shared/enums/form-login-errors.enum';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoginRequestService } from '@requests/services/login-request.service';

@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.scss', '../components.scss'],
})
export class LoginContentComponent implements OnInit {
  form!: FormGroup;
  minLength = 6;
  maxLength = 32;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private loginRequestService: LoginRequestService,
    private snackBarService: SnackBarService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  get pending() {
    return this.form.pending;
  }

  get login(): AbstractControl {
    return this.form.get('login')!;
  }

  get password(): AbstractControl {
    return this.form.get('password')!;
  }

  get getLoginError() {
    let error = '';

    if (this.login.hasError('required')) {
      error = FormErrorsEnum.Required;
    } else if (this.login.hasError('email')) {
      error = FormErrorsEnum.Email;
    }

    return error;
  }

  get getPasswordError() {
    let error = '';

    if (this.password.hasError('required')) {
      error = FormErrorsEnum.Required;
    } else if (this.password.hasError('minlength')) {
      error = FormLoginErrorsEnum.MinLength;
    } else if (this.password.hasError('maxlength')) {
      error = FormLoginErrorsEnum.MaxLength;
    }

    return error;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.form.markAsPending();

    this.loginRequestService
      .login(this.form.value)
      .pipe(
        map((resp) => resp.msg),
        switchMap((token) => {
          return of(this.loginService.updateToken(token));
        }),
        switchMap(() => {
          return this.loginService.updateUser();
        })
      )
      .subscribe(
        () => {},
        () => {
          this.snackBarService.openSnackBar('Invalid data', {
            panelClass: ColorsEnum.Error,
          });
          this.form.reset();
        },
        () => {
          this.goToOwnPage();
        }
      );
  }

  private goToOwnPage() {
    this.router
      .navigate(['/', 'user', this.loginService.user!.id])
      .then(() => {
        this.snackBarService.openSnackBar("You're logged in", {
          panelClass: ColorsEnum.Success,
        });
      })
      .catch(() => {
        this.snackBarService.openSnackBar('Navigation error', {
          panelClass: ColorsEnum.Error,
        });
      });
  }

  private createForm() {
    this.form = this.formBuilder.group({
      login: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(this.minLength),
          Validators.maxLength(this.maxLength),
        ],
      ],
    });
  }
}
