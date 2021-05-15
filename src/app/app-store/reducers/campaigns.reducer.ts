import { Action, createReducer, on } from '@ngrx/store';
import { MWEB_FEATURE_KEY } from 'src/app/shared/constants';
import { GetAllCampaigns, GetAllCampaignsError, GetAllCampaignsSuccess } from '../actions/campaigns.action';
import { ICampaignState, initialState } from '../state';

export const userFeatureKey = MWEB_FEATURE_KEY;

const reducer = createReducer(
  initialState as ICampaignState,
  on(GetAllCampaigns, state => (
    {
      ...state,
      campaignsLoading: true,
      campaigns: [],
      campaingsErrors: null
    }
  )),
  on(GetAllCampaignsSuccess, (state, { campaigns }) => (
    {
      ...state,
      campaignsLoading: false,
      campaigns,
      campaingsErrors: null
    })),
  on(GetAllCampaignsError, (state, { errors }) => (
    {
      ...state,
      campaignsLoading: false,
      campaigns: [],
      campaingsErrors: errors
    }
  ))
);

export function AppReducer(state: ICampaignState , action: Action): ICampaignState {
  return reducer(state as ICampaignState, action as Action);
}
