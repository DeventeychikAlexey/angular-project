import { Injectable } from '@angular/core';
import { CommentInterface } from '../interfaces/comment.interface';

@Injectable()
export class CommentService {
  comments: CommentInterface[] = [];
}
