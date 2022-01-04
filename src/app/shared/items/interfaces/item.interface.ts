import { FieldBooleanInterface } from './field-boolean.interface';
import { FieldIntegerInterface } from './field-integer.interface';
import { FieldStringInterface } from './field-string.interface';
import { FieldDateInterface } from './field-date.interface';
import { TagInterface } from './tag.interface';

export interface ItemInterface {
  id: number;
  name: string;
  id_collection: number;
  createdAt: string;
  updatedAt: string;
  fieldsBoolean: FieldBooleanInterface[];
  fieldsInteger: FieldIntegerInterface[];
  fieldsString: FieldStringInterface[];
  fieldsText: FieldStringInterface[];
  fieldsDate: FieldDateInterface[];
  tags: TagInterface[];
  isChangeable: boolean;
  isRemovable: boolean;
}
