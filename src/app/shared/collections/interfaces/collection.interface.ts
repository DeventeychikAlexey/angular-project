export interface CollectionInterface {
  id: number;
  name: string;
  description: string;
  id_topic: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  id_user: number;
  topic: {
    id: number;
    name: string;
  };
  isChangeable: boolean;
  isRemovable: boolean;
  isViewable: boolean;
}
