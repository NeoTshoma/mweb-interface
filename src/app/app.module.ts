// import { featureKey } from './app-store/mweb-store/selectors/campaigns.selector';
import { MWEB_FEATURE_KEY } from './shared/constants';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CampaignsService } from './services/campaigns/campaigns.service';
import { HttpRequestService } from './services/http-request/http-request.service';
import { reducers, metaReducers } from './app-store';
import { EffectsModule } from '@ngrx/effects';
import { CampaignsEffects } from './app-store/effects/campaigns.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CampaignsEffects]),
    StoreDevtoolsModule.instrument()

  ],
  providers: [
    CampaignsService,
    HttpRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
