import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CommentInterface } from '../interfaces/comment.interface';
import { Observable } from 'rxjs';
import { CommentFormInterface } from '../interfaces/comment-form.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentRequestService {
  constructor(private http: HttpClient) {}

  createComment(
    itemId: number,
    body: CommentFormInterface
  ): Observable<CommentInterface> {
    return this.http.post<CommentInterface>(
      environment.baseURI + 'user/comment/item/' + itemId,
      body
    );
  }

  getItemComments(itemId: number): Observable<CommentInterface[]> {
    return this.http.get<CommentInterface[]>(
      environment.baseURI + 'comment/item/' + itemId
    );
  }

  getNewComments(itemId: number): Observable<CommentInterface[]> {
    return this.http.get<CommentInterface[]>(
      environment.baseURI + 'comment/update/item/' + itemId
    );
  }
}
