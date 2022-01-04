import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsErrorService {
  constructor() {}

  getRequiredError(control: AbstractControl): string {
    if (control.hasError('required')) {
      return 'Field is required';
    }

    return '';
  }

  getEmailError(control: AbstractControl): string {
    if (control.hasError('email')) {
      return 'Email is invalid';
    }

    return '';
  }

  getMinLengthError(control: AbstractControl, minLength: number): string {
    if (control.hasError('minlength')) {
      return `Can't be less than ${minLength}`;
    }

    return '';
  }

  getMaxLengthError(control: AbstractControl, maxLength: number): string {
    if (control.hasError('maxlength')) {
      return `Can't be more than ${maxLength}`;
    }

    return '';
  }

  getMustMatchError(control: AbstractControl, matchingName: string): string {
    if (control.hasError('mustMatch')) {
      return `This field isn't equal to ${matchingName}`;
    }

    return '';
  }
}
