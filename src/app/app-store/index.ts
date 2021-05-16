import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppReducer } from './reducers/campaigns.reducer';
import { ICampaignState, IMwebState } from './state';

export const reducers: ActionReducerMap<IMwebState> = {
  MwebAppState: AppReducer
};
export const metaReducers: MetaReducer<IMwebState>[] = [];
