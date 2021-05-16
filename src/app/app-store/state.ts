import { Campaigns } from './../models/campaigns/campaigns';

export interface ICampaignState {
  campaigns: Campaigns;
  campaignsLoading: boolean;
  campaingsErrors: any;
}

export interface IMwebState {
  MwebAppState: ICampaignState;
}

export const initialState: ICampaignState = {
  campaigns: null,
  campaignsLoading: false,
  campaingsErrors: null
};
