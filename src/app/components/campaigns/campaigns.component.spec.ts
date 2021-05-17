import { PriceRange } from './../../models/price-ranges/price-range';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IMwebState } from 'src/app/app-store/state';
import { Campaign } from 'src/app/models/campaigns/campaigns';
import { ProductsComponent } from '../products/products.component';
import { Provider } from 'src/app/models/providers/providers';
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
      declarations: [CampaignsComponent, ProductsComponent],
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

  it('should assign providers from the products component', () => {
    const providers: Provider[] = [
      { name: 'Vodacom'}, {name: 'Vuma'}, {name: 'Open Serve'}];

    component.setProviders(providers);

    expect(component.providers.length).toEqual(3);
  });

  it('should add a provider to filter by when the fibre provider checkbox is clicked', () => {
    const mockEvent  = {
        target: {
          checked: true
        }
    };

    const provider = 'Test Provider';

    component.filterByProvider(provider, mockEvent);

    expect(component.selectedProviders.length).toEqual(1);
    expect(component.filterProviders.providers.length).toEqual(1);
  });

  it('should remove a provider to filter by when the fibre provider checkbox is unchecked', () => {
    const mockEvent  = {
        target: {
          checked: false
        }
    };

    const provider = 'Test Provider';
    component.selectedProviders = ['Test Provider', 'A name', 'Another provider'];

    component.filterByProvider(provider, mockEvent);

    expect(component.selectedProviders.length).toEqual(2);
    expect(component.filterProviders.providers.length).toEqual(2);
  });

  it('should add a price range to filter by when the price range checkbox is clicked', () => {
    const mockEvent  = {
        target: {
          checked: true
        }
    };

    const priceRange: PriceRange = {
      label: 'R0 - R99', min: 0, max: 99
    };

    component.filterByPrice(priceRange, mockEvent);

    expect(component.selectedPriceRanges.length).toEqual(1);
    expect(component.filterPrices.prices.length).toEqual(1);
  });

  it('should remove the selected price range when the price range checkbox is unchecked', () => {
    const mockEvent  = {
        target: {
          checked: false
        }
    };

    const priceRange: PriceRange = {
      label: 'R0 - R99', min: 0, max: 99
    };
    component.selectedPriceRanges = [
      { label: 'R100-R999', min: 100, max: 999 }, { label: 'R0 - R99', min: 0, max: 99 },
      { label: 'R1000+', min: 1000, max: 9999}];

    component.filterByPrice(priceRange, mockEvent);

    expect(component.selectedPriceRanges.length).toEqual(2);
    expect(component.filterPrices.prices.length).toEqual(2);
  });
});
