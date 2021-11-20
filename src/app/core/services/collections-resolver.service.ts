import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ResponseInterface } from '@shared/interfaces/response.interface';
import { CollectionsService } from '@core/services/collections.service';
import { map } from 'rxjs/operators';

@Injectable()
export class CollectionsResolverService implements Resolve<any> {
  constructor(private collectionsService: CollectionsService) {}

  resolve(): Observable<ResponseInterface> {
    return this.collectionsService.getCollections().pipe(
      map((response) => {
        return response.msg;
      })
    );
  }
}
