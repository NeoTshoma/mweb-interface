import { Endpoints } from 'src/app/shared/endpoints';
import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpService: HttpRequestService) { }

  public getProducts(request: string) {
    return this.httpService.getByQueryRequest(Endpoints.PROMO_CODES, request, Endpoints.PROMO_CODES_QUERY);
  }
}
