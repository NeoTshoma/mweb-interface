import { IMwebState } from './../../app-store/state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllCampaigns } from 'src/app/app-store/actions/campaigns.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<IMwebState>) { }

  ngOnInit() {
    this.store.dispatch(GetAllCampaigns());
  }

}
