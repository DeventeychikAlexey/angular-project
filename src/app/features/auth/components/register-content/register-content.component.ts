import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { compareValueValidator } from '@shared/validators/compare-value/compare-value.validator';
import { PartialObserver } from 'rxjs';
import { AuthService } from '@core/services/auth/auth.service';
import { SnackbarService } from '@core/services/snackbar/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-content',
  templateUrl: './register-content.component.html',
  styleUrls: ['./register-content.component.scss'],
})
export class RegisterContentComponent implements OnInit {
  registerForm!: FormGroup;
  minLength = 6;
  maxLength = 32;
  errors = {
    required: 'You must enter a value',
    email: 'Email is invalid!',
    minLength: `Min length is ${this.minLength}`,
    maxLength: `Max length is ${this.maxLength}`,
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackbarService: SnackbarService,
    private router: Router
  ) {
    this._createForm();
  }

  get pending(): boolean {
    return this.registerForm.pending;
  }

  get name(): AbstractControl {
    return this.registerForm.get('name')!;
  }

  get email(): AbstractControl {
    return this.registerForm.get('login')!;
  }

  get password(): AbstractControl {
    return this.registerForm.get('password')!;
  }

  get repeatPassword(): AbstractControl {
    return this.registerForm.get('password2')!;
  }

  get getNameError(): string {
    let error = '';
    if (this.name.hasError('required')) error = this.errors.required;
    return error;
  }

  get getEmailError(): string {
    let error = '';
    if (this.email.hasError('required')) error = this.errors.required;
    else if (this.email.hasError('email')) error = this.errors.email;
    return error;
  }

  get getPasswordError(): string {
    let error = '';
    if (this.password.hasError('required')) error = this.errors.required;
    else if (this.password.hasError('minlength')) error = this.errors.minLength;
    else if (this.password.hasError('maxlength')) error = this.errors.maxLength;
    return error;
  }

  get getRepeatPasswordError(): string {
    let error = '';
    if (this.repeatPassword.hasError('required')) error = this.errors.required;
    else if (this.repeatPassword.hasError('mustMatch'))
      error = 'Passwords are not equal';
    return error;
  }

  submit(): void {
    if (this.registerForm.invalid) return;
    const observer: PartialObserver<any> = {
      next: () => {},
      error: () => {
        this.snackbarService.openSnackbar('Try again. Something went wrong.', {
          horizontal: 'end',
          vertical: 'bottom',
        });
        this.registerForm.reset();
      },
      complete: () => {
        this.router.navigate(['/', 'auth', 'login']).then(() => {
          this.snackbarService.openSnackbar('You can sign in', {
            horizontal: 'end',
            vertical: 'bottom',
          });
        });
      },
    };
    this.registerForm.markAsPending();
    this.authService.register(this.registerForm.value).subscribe(observer);
  }

  private _createForm(): void {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        login: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(this.minLength),
            Validators.maxLength(this.maxLength),
          ],
        ],
        password2: ['', Validators.required],
      },
      { validator: compareValueValidator('password', 'password2') }
    );
  }

  ngOnInit(): void {}
}
