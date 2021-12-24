import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from '../../../../root/services/snack-bar.service';
import { compareValueValidator } from '../../validators/compare-value.validator';
import { FormsErrorService } from '../../../../shared/forms/services/forms-error.service';
import { ColorsEnum } from '../../../../root/enums/colors.enum';
import { Router } from '@angular/router';
import { RegisterRequestService } from '../../services/register-request.service';

@Component({
  selector: 'app-register-content',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../authorization.scss'],
})
export class RegisterComponent {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    public formsErrorService: FormsErrorService,
    private router: Router,
    private registerRequestService: RegisterRequestService
  ) {
    this.formGroup = this.formBuilder.group(
      {
        name: [null, [Validators.required]],
        login: [null, [Validators.required, Validators.email]],
        password: [
          null,
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(32),
          ],
        ],
        password2: [
          null,
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(32),
          ],
        ],
      },
      { validator: compareValueValidator('password', 'password2') }
    );
  }

  submit() {
    if (this.formGroup.invalid) {
      return;
    }

    this.formGroup.markAsPending();

    this.registerRequestService.register(this.formGroup.value).subscribe(
      () => {},
      () => {
        this.snackBarService.openSnackBar('Something went wrong :( Try again', {
          panelClass: ColorsEnum.Error,
        });
        this.formGroup.reset();
      },
      () => {
        this.goToLoginPage()
          .then(() => {
            this.snackBarService.openSnackBar(
              'You can sign in your created account',
              {
                panelClass: ColorsEnum.Success,
              }
            );
          })
          .catch(() => {
            this.snackBarService.navigationError();
            this.formGroup.reset();
          });
      }
    );
  }

  private goToLoginPage(): Promise<boolean> {
    return this.router.navigate(['/', 'auth', 'login']);
  }
}
