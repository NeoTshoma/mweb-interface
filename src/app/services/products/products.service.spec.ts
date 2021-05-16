import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpRequestService } from '../http-request/http-request.service';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpRequestService],
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });

  it('should get all campaigns', () => {
    const httpRequestService: HttpRequestService = TestBed.get(HttpRequestService);
    const service: ProductsService = TestBed.get(ProductsService);

    spyOn(httpRequestService, 'getByQueryRequest');
    service.getProducts('first,second,third');

    expect(httpRequestService.getByQueryRequest).toHaveBeenCalled();
  });
});
