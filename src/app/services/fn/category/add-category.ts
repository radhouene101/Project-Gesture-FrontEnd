/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategoryProjectsDto } from '../../models/category-projects-dto';

export interface AddCategory$Params {
      body: CategoryProjectsDto
}

export function addCategory(http: HttpClient, rootUrl: string, params: AddCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryProjectsDto>> {
  const rb = new RequestBuilder(rootUrl, addCategory.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CategoryProjectsDto>;
    })
  );
}

addCategory.PATH = '/category-projects';