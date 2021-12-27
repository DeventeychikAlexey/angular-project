import { Injectable } from '@angular/core';
import { environment } from '../../../../../../frontAngular/src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImageRequestService {
  constructor(private http: HttpClient) {}

  getImage(collectionId: number): Observable<string> {
    return this.http.get<string>(environment.baseURI + 'image/' + collectionId);
  }
}
