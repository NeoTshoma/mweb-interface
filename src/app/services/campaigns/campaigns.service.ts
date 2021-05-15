import { Injectable } from '@angular/core';
import { Endpoints } from 'src/app/shared/endpoints';
import { HttpRequestService } from '../http-request/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {

  constructor(private httpService: HttpRequestService) { }

  public getCampaigns() {
    return this.httpService.getAllRequest(Endpoints.CAMPAIGNS);
  }
}
