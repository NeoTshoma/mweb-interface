import { MWEB_FEATURE_KEY } from './../../shared/constants';
import { IMwebState } from './../state';
import { createSelector } from '@ngrx/store';

export const featureKey = MWEB_FEATURE_KEY;
const selectFeature = (state: IMwebState) => state.MwebProductsState;

export const getProductsLoading = createSelector(
  selectFeature,
  state => state.productsLoading
);

export const getProducts = createSelector(
  selectFeature,
  state => state.products
);

export const getProductsErrors = createSelector(
  selectFeature,
  state => state.productsErrors
);


