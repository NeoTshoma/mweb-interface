import { GetAllProducts } from './../../app-store/actions/products.action';
import { getCampaigns, getCampaignsLoading, getCampaignErrors } from 'src/app/app-store/selectors/campaigns.selector';
import { IMwebState } from './../../app-store/state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Campaign, Campaigns } from 'src/app/models/campaigns/campaigns';
import { Provider } from 'src/app/models/providers/providers';
import { PriceRange } from 'src/app/models/price-ranges/price-range';
import { getProductsLoading } from 'src/app/app-store/selectors/products.selector';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit, OnDestroy {
  private ngUsubscribe = new Subject();
  campaignsLoading$: Observable<boolean>;
  productsLoading$: Observable<boolean>;
  campaignsErrors$: Observable<any>;
  campaigns: Campaigns;
  providers: Provider[];
  prices: PriceRange[];
  promoCodes: string[];
  selectedProviders: string[] = [];
  selectedPriceRanges: PriceRange[] = [];
  filterProviders: any;
  filterPrices: any;

  constructor(private store: Store<IMwebState>) { }

  ngOnInit() {
    this.campaignsLoading$ = this.store.select(getCampaignsLoading);
    this.campaignsErrors$ = this.store.select(getCampaignErrors);
    this.productsLoading$ = this.store.select(getProductsLoading);

    this.prices = [{
      min: 0,
      max: 699,
      label: 'R0 - R699'
    },
    {
      min: 700,
      max: 999,
      label: 'R700 - R999'
    },
    {
      min: 1000,
      max: 9999,
      label: 'R1000+'
    },
    ];

    this.store.select(getCampaigns).pipe(
      takeUntil(this.ngUsubscribe)
    ).subscribe((campaigns: Campaigns) => {
      if (campaigns) {
        this.campaigns = campaigns;
        this.promoCodes = this.campaigns.campaigns[0].promocodes;

        this.getProducts(this.campaigns.campaigns[0]);
      }
    });
  }

  getProducts(campaign: Campaign) {
    const promocodes = campaign.promocodes.join();

    this.store.dispatch(GetAllProducts({ promocodes }));
  }

  setProviders(providers: Provider[]) {
    this.selectedProviders = [];
    this.selectedPriceRanges = [];

    this.filterPrices = { prices: this.selectedPriceRanges };
    this.filterProviders = { providers: this.selectedProviders };

    this.providers = providers;
  }

  filterByProvider(provider: string, event) {
    if (event && event.target.checked) {
      this.selectedProviders.push(provider);
    } else {
      this.selectedProviders.splice(this.selectedProviders.indexOf(provider), 1);
    }

    this.filterProviders = { providers: this.selectedProviders };
  }

  filterByPrice(price: PriceRange, event) {
    if (event && event.target.checked) {
      this.selectedPriceRanges.push(price);
    } else {
      this.selectedPriceRanges.splice(this.selectedPriceRanges.indexOf(price), 1);
    }

    this.filterPrices = { prices: this.selectedPriceRanges };
  }

  ngOnDestroy() {
    this.ngUsubscribe.next();
    this.ngUsubscribe.complete();
  }

}
