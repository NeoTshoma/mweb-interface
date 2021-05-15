import { createAction, props } from '@ngrx/store';
import { Campaigns } from 'src/app/models/campaigns/campaigns';

export const GetAllCampaigns = createAction(
  '[CAMPAIGNS] Get all campaigns'
);
export const GetAllCampaignsSuccess = createAction(
  '[CAMPAIGNS] Get all campaigns success',
  props<{ campaigns: Campaigns[] }>()
);

export const GetAllCampaignsError = createAction(
  '[CAMPAIGNS] Get all campaigns error',
  props<{ errors: any }>()
);

