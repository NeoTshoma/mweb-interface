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

  getByIdRequest(uri1: string, uri2: any): Observable<any> {
    const url = `${this.rootUrl}/${encodeURI(uri1)}/${encodeURI(uri2)}/`;
    return this.httpClient.get<any>(url);
  }
}
