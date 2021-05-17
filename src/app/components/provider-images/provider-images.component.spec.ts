import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderImagesComponent } from './provider-images.component';

describe('ProviderImagesComponent', () => {
  let component: ProviderImagesComponent;
  let fixture: ComponentFixture<ProviderImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderImagesComponent ]
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
});
