import { TestBed } from '@angular/core/testing';

import { ImagesService } from './images.service';

describe('ImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ImagesService]
  }));

  it('should be created', () => {
    const service: ImagesService = TestBed.get(ImagesService);
    expect(service).toBeTruthy();
  });

  it('should return all images from providers', () => {
    const service: ImagesService = TestBed.get(ImagesService);

    const providers = service.getImageProviders();

    expect(providers.length).toBeGreaterThan(0);
  });
});
