import { UserInterface } from '@core/interfaces/user.interface';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { TopicInterface } from '@shared/interfaces/topic.interface';

export interface ResponseInterface {
  msg: string | UserInterface | CollectionInterface[] | TopicInterface[];
}
