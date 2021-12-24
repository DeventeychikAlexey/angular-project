import { Injectable } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class FormsService {
  constructor(private formBuilder: FormBuilder) {}

  createFormGroup(
    controlsConfig: { [p: string]: any },
    options?: AbstractControlOptions
  ): FormGroup {
    return this.formBuilder.group(controlsConfig, options);
  }
}
