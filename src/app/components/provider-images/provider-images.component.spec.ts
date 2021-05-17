import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagesService } from 'src/app/services/images/images.service';

import { ProviderImagesComponent } from './provider-images.component';

describe('ProviderImagesComponent', () => {
  let component: ProviderImagesComponent;
  let fixture: ComponentFixture<ProviderImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderImagesComponent ],
      providers: [ImagesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the images of all the providers', () => {
    const service: ImagesService = TestBed.get(ImagesService);
    component.ngOnInit();

    expect(component.fibreProviders.length).toBeGreaterThan(0);
  });
});
