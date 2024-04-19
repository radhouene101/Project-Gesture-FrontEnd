/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addOption } from '../fn/option/add-option';
import { AddOption$Params } from '../fn/option/add-option';
import { deleteOptionById } from '../fn/option/delete-option-by-id';
import { DeleteOptionById$Params } from '../fn/option/delete-option-by-id';
import { getAllOptions } from '../fn/option/get-all-options';
import { GetAllOptions$Params } from '../fn/option/get-all-options';
import { getOptionById } from '../fn/option/get-option-by-id';
import { GetOptionById$Params } from '../fn/option/get-option-by-id';
import { OptionDto } from '../models/option-dto';

@Injectable({ providedIn: 'root' })
export class OptionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllOptions()` */
  static readonly GetAllOptionsPath = '/options';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllOptions()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllOptions$Response(params?: GetAllOptions$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OptionDto>>> {
    return getAllOptions(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllOptions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllOptions(params?: GetAllOptions$Params, context?: HttpContext): Observable<Array<OptionDto>> {
    return this.getAllOptions$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OptionDto>>): Array<OptionDto> => r.body)
    );
  }

  /** Path part for operation `addOption()` */
  static readonly AddOptionPath = '/options';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addOption()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addOption$Response(params: AddOption$Params, context?: HttpContext): Observable<StrictHttpResponse<OptionDto>> {
    return addOption(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addOption$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addOption(params: AddOption$Params, context?: HttpContext): Observable<OptionDto> {
    return this.addOption$Response(params, context).pipe(
      map((r: StrictHttpResponse<OptionDto>): OptionDto => r.body)
    );
  }

  /** Path part for operation `getOptionById()` */
  static readonly GetOptionByIdPath = '/options/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOptionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptionById$Response(params: GetOptionById$Params, context?: HttpContext): Observable<StrictHttpResponse<OptionDto>> {
    return getOptionById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOptionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptionById(params: GetOptionById$Params, context?: HttpContext): Observable<OptionDto> {
    return this.getOptionById$Response(params, context).pipe(
      map((r: StrictHttpResponse<OptionDto>): OptionDto => r.body)
    );
  }

  /** Path part for operation `deleteOptionById()` */
  static readonly DeleteOptionByIdPath = '/options/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOptionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOptionById$Response(params: DeleteOptionById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteOptionById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteOptionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOptionById(params: DeleteOptionById$Params, context?: HttpContext): Observable<void> {
    return this.deleteOptionById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
