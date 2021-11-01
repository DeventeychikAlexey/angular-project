import { UserInterface } from '@core/interfaces/user.interface';
import { CollectionInterface } from '@shared/interfaces/collection.interface';

export interface ResponseInterface {
  msg: string | UserInterface | CollectionInterface[];
}
