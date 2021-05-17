import { Injectable } from '@angular/core';
import { LogoProviders } from 'src/app/models/logo-providers/logo-provider';
import { LOGO_BASE_URL } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  providerImages: LogoProviders [];
  logoBaseURL = LOGO_BASE_URL;

  constructor() {
    this.providerImages = [
      {
        code: 'centurycity',
        name: 'Century City Connect',
        url: `${this.logoBaseURL}/provider-century.png`
      },
      {
        code: 'evotel',
        name: 'Evotel',
        url: `${this.logoBaseURL}/provider-evotel.png`
      },
      {
        code: 'octotel',
        name: 'Octotel',
        url: `${this.logoBaseURL}/provider-octotel.png`
      },
      {
        code: 'vumatel',
        name: 'Vumatel',
        url: `${this.logoBaseURL}/provider-vuma.png`
      },
      {
        code: 'openserve',
        name: 'Openserve',
        url: `${this.logoBaseURL}/provider-openserve.png`
      },
      {
        code: 'frogfoot',
        name: 'Frogfoot',
        url: `${this.logoBaseURL}/provider-frogfoot.png`
      },
      {
        code: 'mfn',
        name: 'MFN',
        url: `${this.logoBaseURL}/provider-metrofibre.png`
      },
      {
        code: 'vodacom',
        name: 'Vodacom',
        url: `${this.logoBaseURL}/provider-vodacom.png`
      },
      {
        code: 'linkafrica',
        name: 'Link Africa',
        url: `${this.logoBaseURL}/provider-linkafrica.png`
      },
      {
        code: 'linklayer',
        name: 'Link Layer',
        url: `${this.logoBaseURL}/provider-link-layer.png`
      },
      {
        code: 'lightstruck',
        name: 'Lightstruck',
        url: `${this.logoBaseURL}/provider-lightstruck.png`
      },
      {
        code: 'mitchells',
        name: 'Mitchells Fibre',
        url: `${this.logoBaseURL}/provider-mitchells.png`
      },
      {
        code: 'vumareach',
        name: 'Vuma Reach',
        url: `${this.logoBaseURL}/provider-vuma.png`
      }
    ];
  }

  getImageProviders(): LogoProviders[] {
    return this.providerImages;
  }
}
