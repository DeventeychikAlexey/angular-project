export interface ItemInterface {
  id: number;
  name: string;
  id_collection: number;
  createdAt: string;
  updatedAt: string;
  fieldsBoolean: Array<any>;
  fieldsInteger: Array<any>;
  fieldsString: Array<any>;
  fieldsText: Array<any>;
  fieldsDate: Array<any>;
  tags: Array<any>;
  isChangeable?: boolean;
  isRemovable?: boolean;
  isViewable?: boolean;
}
