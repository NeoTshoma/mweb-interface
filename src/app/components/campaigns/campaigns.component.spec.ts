import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IMwebState } from 'src/app/app-store/state';
import { Campaign } from 'src/app/models/campaigns/campaigns';

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
      declarations: [CampaignsComponent],
      providers: [provideMockStore({ initialState })]
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

  it('should get products from a campaign', () => {
    const campaign: Campaign = {
      code: 'my code', name: 'vuma test',
      description: 'This one is just a test', category: 'fibre',
      isStandardCampaign: false,
      isDefaultCampaign: true,
      isPrivateCampaign: false,
      promocodes: ['ONE', 'TWO', 'THREEE'],
      links: []
    };

    component.getProducts(campaign);
    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});
