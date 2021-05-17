import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpRequestService } from '../http-request/http-request.service';

import { CampaignsService } from './campaigns.service';

describe('CampaignsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpRequestService],
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: CampaignsService = TestBed.get(CampaignsService);
    expect(service).toBeTruthy();
  });

  it('should get campaigns', () => {
    const httpRequestService: HttpRequestService = TestBed.get(HttpRequestService);
    const service: CampaignsService = TestBed.get(CampaignsService);

    spyOn(httpRequestService, 'getAllRequest');
    service.getCampaigns();

    expect(httpRequestService.getAllRequest).toHaveBeenCalled();
  });
});
