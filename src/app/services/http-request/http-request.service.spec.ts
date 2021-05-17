import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HttpRequestService } from './http-request.service';

describe('HttpRequestService', () => {
  const dataServiceMock = jasmine.createSpyObj('HttpRequestService', [
    'getAllRequest',
    'getByIdRequest'
  ]);

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [HttpClient]
  }));

  it('should be created', () => {
    const service: HttpRequestService = TestBed.get(HttpRequestService);
    expect(service).toBeTruthy();
  });

  it('should get data using the provided url', () => {
    const service: HttpRequestService = TestBed.get(HttpRequestService);
    const httpRequest: HttpClient = TestBed.get(HttpClient);

    spyOn(httpRequest, 'get');

    service.getAllRequest('testUrl');

    expect(httpRequest.get).toHaveBeenCalled();
  });

  it('should get data using the provided uri data', () => {
    const service: HttpRequestService = TestBed.get(HttpRequestService);
    const httpRequest: HttpClient = TestBed.get(HttpClient);

    spyOn(httpRequest, 'get');

    service.getByQueryRequest('myendpoint/one', 'first,second,third', '?q=one');

    expect(httpRequest.get).toHaveBeenCalled();
  });
});
