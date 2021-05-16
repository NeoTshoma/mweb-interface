import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IMwebState } from 'src/app/app-store/state';

import { CampaignsComponent } from './campaigns.component';

describe('CampaignsComponent', () => {
  let component: CampaignsComponent;
  let fixture: ComponentFixture<CampaignsComponent>;
  let mockStore: MockStore<IMwebState>;

  beforeEach(async(() => {
    const initialState = {
      campaignsLoading: true,
      campaigns: {},
      campaingsErrors: null
    };
    TestBed.configureTestingModule({
      declarations: [ CampaignsComponent ],
      providers: [provideMockStore({initialState})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockStore = TestBed.get(Store);
    spyOn(mockStore, 'select').and.callThrough();
    spyOn(mockStore, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(CampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
