import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService, responseType } from '@core/services/auth/auth.service';
import { PartialObserver } from 'rxjs';
import { SnackbarService } from '@core/services/snackbar/snackbar.service';
import { Router } from '@angular/router';
import { RoutesService } from '@core/services/routes/routes.service';

@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.scss'],
})
export class LoginContentComponent implements OnInit {
  loginForm!: FormGroup;
  minLength = 6;
  maxLength = 32;
  errors = {
    required: 'You must enter a value',
    login: 'Email is invalid!',
    minLength: `Min length is ${this.minLength}`,
    maxLength: `Max length is ${this.maxLength}`,
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackbarService: SnackbarService,
    private router: Router,
    private routesService: RoutesService
  ) {
    this._createForm();
  }

  get pending(): boolean {
    return this.loginForm.pending;
  }

  get login(): AbstractControl {
    return this.loginForm.get('login')!;
  }

  get password(): AbstractControl {
    return this.loginForm.get('password')!;
  }

  get getLoginError(): string {
    let error = '';
    if (this.login.hasError('required')) error = this.errors.required;
    else if (this.login.hasError('email')) error = this.errors.login;
    return error;
  }

  get getPasswordError(): string {
    let error = '';
    if (this.password.hasError('required')) error = this.errors.required;
    else if (this.password.hasError('minlength')) error = this.errors.minLength;
    else if (this.password.hasError('maxlength')) error = this.errors.maxLength;
    return error;
  }

  submit(): void {
    if (this.loginForm.invalid) return;
    const observer: PartialObserver<any> = {
      next: (resp: responseType) => {
        const observer = {
          complete: () => {
            this.routesService.subject.next();
          },
        };
        if (typeof resp.msg === 'string')
          this.authService.setToken(resp.msg).subscribe(observer);
      },
      error: () => {
        this.snackbarService.openSnackbar('Invalid data', {
          horizontal: 'end',
          vertical: 'bottom',
        });
        this.loginForm.reset();
      },
      complete: () => {
        this.router
          .navigate(['/', 'auth', 'register'])
          .then(() => {
            this.snackbarService.openSnackbar("You're logged in", {
              horizontal: 'end',
              vertical: 'bottom',
            });
          })
          .catch(() => {
            this.snackbarService.openSnackbar('Navigation problem', {
              horizontal: 'end',
              vertical: 'bottom',
            });
          });
      },
    };
    this.loginForm.markAsPending();
    this.authService.login(this.loginForm.value).subscribe(observer);
  }

  private _createForm(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(this.minLength),
          Validators.maxLength(this.maxLength),
        ],
      ],
    });
  }

  ngOnInit(): void {}
}
