import { IMwebState } from './../state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MWEB_FEATURE_KEY } from 'src/app/shared/constants';

export const featureKey = MWEB_FEATURE_KEY;
const getMwebAppState = createFeatureSelector<IMwebState>(featureKey);

export const getCampaignsLoading = createSelector(
  getMwebAppState,
  state => state.MwebAppState.campaignsLoading
);

export const getCampaigns = createSelector(
  getMwebAppState,
  state => state.MwebAppState.campaigns
);

export const getCampaignErrors = createSelector(
  getMwebAppState,
  state => state.MwebAppState.campaingsErrors
);


