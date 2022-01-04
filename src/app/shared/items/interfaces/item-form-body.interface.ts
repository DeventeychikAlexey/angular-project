import { FieldIntegerInterface } from './field-integer.interface';
import { FieldStringInterface } from './field-string.interface';
import { FieldDateInterface } from './field-date.interface';
import { FieldBooleanInterface } from './field-boolean.interface';
import { TagInterface } from './tag.interface';

export interface ItemFormBodyInterface {
  name: string;
  tags: TagInterface[];
  fieldsNumber: FieldIntegerInterface[];
  fieldsText: FieldStringInterface[];
  fieldsString: FieldStringInterface[];
  fieldsDate: FieldDateInterface[];
  fieldsBoolean: FieldBooleanInterface[];
}
