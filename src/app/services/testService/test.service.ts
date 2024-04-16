import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {filter, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class TestService {
  rootUrl='http://localhost:8080/PI'
  constructor(
    private  httpClient : HttpClient
  ) { }

  finAllUsers(): Observable<any>{
    let _headers: HttpHeaders = new HttpHeaders();
    _headers = _headers.set('Authorization','Bearer eyJhbGciOiJIUzI1NiJ9.eyJmdWxsTmFtZSI6ImVyZXJlIiwidXNlcklkIjo5LCJzdWIiOiJ0ZXN0QHRlc3QudGVzdCIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX1VTRVIifV0sImlhdCI6MTcxMzEyNTc5MywiZXhwIjoxNzEzODQ1NzkzfQ.HFVKm95OxzeBHqA2a5HTvfmdTZDqUmqnUnn4l-HVBLk')
    const req = new HttpRequest<any>(
      'GET',
      this.rootUrl + "/users",
      {
        headers:_headers,
        params: null ,
        reponseType : 'json'
      }
    );
    return this.httpClient.request(req)
      .pipe(
        filter(r => r instanceof HttpResponse),
        map(res => res as any)
      );
  }
}
