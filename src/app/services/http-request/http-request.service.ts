import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  private rootUrl = environment.baseURL;

  public httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  getAllRequest(endpoint: string): Observable<any> {
    return this.httpClient.get(`${this.rootUrl}/${endpoint}`, this.httpOptions);
  }

  getByQueryRequest(endpoint: string, parameter: any, suffix: string): Observable<any> {
    const url = `${this.rootUrl}/${endpoint}/${parameter}/${suffix}`;
    return this.httpClient.get<any>(url);
  }
}
