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
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { NavComponent } from './components/nav/nav.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductEffects } from './app-store/effects/products.effect';
import { ProductsComponent } from './components/products/products.component';
import { ProviderImagesComponent } from './components/provider-images/provider-images.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CampaignsComponent,
    NavComponent,
    LoaderComponent,
    ProductsComponent,
    ProviderImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CampaignsEffects, ProductEffects]),
    StoreDevtoolsModule.instrument(),
    NgbModule

  ],
  providers: [
    CampaignsService,
    HttpRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
