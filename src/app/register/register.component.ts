import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequestService } from './services/register-request.service';
import { SnackBarService } from '../services/snack-bar.service';
import { FormErrorsEnum } from '../enums/form-errors.enum';
import { FormRegisterErrorsEnum } from '../enums/form-register-errors.enum';
import { ColorsEnum } from '../enums/colors.enum';
import { compareValueValidator } from './validators/compare-value.validator';

@Component({
  selector: 'app-register-content',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../authentication-content.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  minLength = 6;
  maxLength = 32;

  constructor(
    private formBuilder: FormBuilder,
    private registerRequestService: RegisterRequestService,
    private snackBarService: SnackBarService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  get pending() {
    return this.form.pending;
  }

  get name(): AbstractControl {
    return this.form.get('name')!;
  }

  get email(): AbstractControl {
    return this.form.get('login')!;
  }

  get password(): AbstractControl {
    return this.form.get('password')!;
  }

  get repeatPassword(): AbstractControl {
    return this.form.get('password2')!;
  }

  get getNameError() {
    let error = '';

    if (this.name.hasError('required')) {
      error = FormErrorsEnum.Required;
    }

    return error;
  }

  get getEmailError() {
    let error = '';

    if (this.email.hasError('required')) {
      error = FormErrorsEnum.Required;
    } else if (this.email.hasError('email')) {
      error = FormErrorsEnum.Email;
    }

    return error;
  }

  get getPasswordError() {
    let error = '';

    if (this.password.hasError('required')) {
      error = FormErrorsEnum.Required;
    } else if (this.password.hasError('minlength')) {
      error = FormRegisterErrorsEnum.MinLength;
    } else if (this.password.hasError('maxlength')) {
      error = FormRegisterErrorsEnum.MaxLength;
    }

    return error;
  }

  get getRepeatPasswordError() {
    let error = '';

    if (this.repeatPassword.hasError('required')) {
      error = FormErrorsEnum.Required;
    } else if (this.repeatPassword.hasError('mustMatch')) {
      error = FormRegisterErrorsEnum.MustMatch;
    }

    return error;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.form.markAsPending();

    this.registerRequestService.register(this.form.value).subscribe(
      () => {},
      () => {
        this.snackBarService.openSnackBar('Try again. Something went wrong', {
          panelClass: ColorsEnum.Error,
        });

        this.form.reset();
      },
      () => {
        this.goToLoginPage();
      }
    );
  }

  private goToLoginPage() {
    this.router.navigate(['/', 'auth', 'login']).then(() => {
      this.snackBarService.openSnackBar('You can sign in', {
        panelClass: ColorsEnum.Success,
      });
    });
  }

  private createForm() {
    this.form = this.formBuilder.group(
      {
        name: [null, [Validators.required]],
        login: [null, [Validators.required, Validators.email]],
        password: [
          null,
          [
            Validators.required,
            Validators.minLength(this.minLength),
            Validators.maxLength(this.maxLength),
          ],
        ],
        password2: [null, Validators.required],
      },
      { validator: compareValueValidator('password', 'password2') }
    );
  }
}
