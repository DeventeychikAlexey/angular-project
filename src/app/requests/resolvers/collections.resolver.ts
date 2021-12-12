import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CollectionsRequestService } from '@requests/services/collections-request.service';
import { ResponseInterface } from '@shared/interfaces/response.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class CollectionsResolver implements Resolve<any> {
  constructor(private collectionsRequestService: CollectionsRequestService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ResponseInterface> {
    return this.collectionsRequestService.getCollections().pipe(
      map((response) => {
        return response.msg;
      })
    );
  }
}
