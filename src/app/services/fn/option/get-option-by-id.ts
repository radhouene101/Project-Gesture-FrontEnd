/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OptionDto } from '../../models/option-dto';

export interface GetOptionById$Params {
  id: number;
}

export function getOptionById(http: HttpClient, rootUrl: string, params: GetOptionById$Params, context?: HttpContext): Observable<StrictHttpResponse<OptionDto>> {
  const rb = new RequestBuilder(rootUrl, getOptionById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OptionDto>;
    })
  );
}

getOptionById.PATH = '/options/{id}';
