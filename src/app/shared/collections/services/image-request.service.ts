import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageRequestService {
  constructor(private http: HttpClient) {}

  getImage(collectionId: number): Observable<string> {
    return this.http.get<string>(environment.baseURI + 'image/' + collectionId);
  }
}
