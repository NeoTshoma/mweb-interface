import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppReducer } from './reducers/campaigns.reducer';
import { ProductsReducer } from './reducers/products.reducer';
import { IMwebState } from './state';

export const reducers: ActionReducerMap<IMwebState> = {
  MwebAppState: AppReducer,
  MwebProductsState: ProductsReducer
};

export const metaReducers: MetaReducer<IMwebState>[] = [];
