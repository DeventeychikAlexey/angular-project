import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FieldIntegerInterface } from '../interfaces/field-integer.interface';
import { FieldStringInterface } from '../interfaces/field-string.interface';
import { FieldDateInterface } from '../interfaces/field-date.interface';
import { FieldBooleanInterface } from '../interfaces/field-boolean.interface';
import { ItemInterface } from '../interfaces/item.interface';

@Injectable()
export class ItemFormService {
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  get tags(): AbstractControl {
    return this.formGroup.get('tags')!;
  }

  get fieldsNumber(): FormArray {
    return this.formGroup.get('fieldsNumber')! as FormArray;
  }

  get fieldsText(): FormArray {
    return this.formGroup.get('fieldsText')! as FormArray;
  }

  get fieldsString(): FormArray {
    return this.formGroup.get('fieldsString')! as FormArray;
  }

  get fieldsDate(): FormArray {
    return this.formGroup.get('fieldsDate')! as FormArray;
  }

  get fieldsBoolean(): FormArray {
    return this.formGroup.get('fieldsBoolean')! as FormArray;
  }

  createForm(item?: ItemInterface) {
    this.formGroup = this.formBuilder.group({
      name: [item?.name || '', [Validators.required]],
      tags: new FormArray([]),
      fieldsNumber: new FormArray([]),
      fieldsText: new FormArray([]),
      fieldsString: new FormArray([]),
      fieldsDate: new FormArray([]),
      fieldsBoolean: new FormArray([]),
    });

    item?.fieldsDate.forEach((field) => {
      this.addFieldDate(field);
    });

    item?.fieldsText.forEach((field) => {
      this.addFieldText(field);
    });

    item?.fieldsBoolean.forEach((field) => {
      this.addFieldBoolean(field);
    });

    item?.fieldsInteger.forEach((field) => {
      this.addFieldNumber(field);
    });
  }

  createField(
    fieldData?:
      | FieldIntegerInterface
      | FieldStringInterface
      | FieldDateInterface
      | FieldBooleanInterface,
    titleDefault = '',
    valueDefault: unknown = null
  ): FormGroup {
    return this.formBuilder.group({
      title: [fieldData?.title || titleDefault, Validators.required],
      value: [fieldData?.value || valueDefault, Validators.required],
    });
  }

  addFieldText(fieldData?: FieldStringInterface) {
    const field = this.createField(fieldData);

    this.fieldsText.push(field);
  }

  addFieldDate(fieldData?: FieldDateInterface) {
    const field = this.createField(fieldData, '', new Date());

    this.fieldsDate.push(field);
  }

  addFieldBoolean(fieldData?: FieldBooleanInterface) {
    const field = this.createField(fieldData);

    this.fieldsBoolean.push(field);
  }

  addFieldNumber(fieldData?: FieldIntegerInterface) {
    const field = this.createField(fieldData);

    this.fieldsNumber.push(field);
  }

  removeField(
    field: FormArray,
    fieldIndex: number = field.controls.length - 1
  ) {
    field.removeAt(fieldIndex);
  }
}
