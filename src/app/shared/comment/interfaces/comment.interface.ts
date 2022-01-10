export interface CommentInterface {
  id: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  id_user: number;
  id_item: number;
  user: {
    name: string;
  };
}
