import { getCampaigns, getCampaignsLoading, getCampaignErrors } from 'src/app/app-store/selectors/campaigns.selector';
import { IMwebState } from './../../app-store/state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Campaigns } from 'src/app/models/campaigns/campaigns';
import { Provider } from 'src/app/models/providers/providers';
import { PriceRange } from 'src/app/models/price-ranges/price-range';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit, OnDestroy {
  private ngUsubscribe = new Subject();
  campaignsLoading$: Observable<boolean>;
  campaignsErrors$: Observable<any>;
  campaigns: Campaigns;
  providers: Provider[];
  prices: PriceRange[];

  constructor(private store: Store<IMwebState>) { }

  ngOnInit() {
    this.campaignsLoading$ = this.store.select(getCampaignsLoading);
    this.campaignsErrors$ = this.store.select(getCampaignErrors);

    this.providers = [
      {
        name: 'Vuma Reach'
      },
      {
        name: 'Mitchells Fibre'
      }];

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
      }
    });
  }

  ngOnDestroy() {
    this.ngUsubscribe.next();
    this.ngUsubscribe.complete();
  }

}
