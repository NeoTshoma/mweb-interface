import { IMwebState } from './../state';
import { createSelector } from '@ngrx/store';
import { MWEB_FEATURE_KEY } from 'src/app/shared/constants';

export const featureKey = MWEB_FEATURE_KEY;
const selectFeature = (state: IMwebState) => state.MwebAppState;

export const getCampaignsLoading = createSelector(
  selectFeature,
  state => state.campaignsLoading
);

export const getCampaigns = createSelector(
  selectFeature,
  state => state.campaigns
);

export const getCampaignErrors = createSelector(
  selectFeature,
  state => state.campaingsErrors
);


