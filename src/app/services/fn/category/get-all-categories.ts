/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategoryProjectsDto } from '../../models/category-projects-dto';

export interface GetAllCategories$Params {
}

export function getAllCategories(http: HttpClient, rootUrl: string, params?: GetAllCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CategoryProjectsDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllCategories.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CategoryProjectsDto>>;
    })
  );
}

getAllCategories.PATH = '/category-projects';
