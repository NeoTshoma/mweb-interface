import { GetAllProducts, GetAllProductsSuccess, GetAllProductsErrors } from './../actions/products.action';
import { MWEB_PRODUCTS_KEY } from './../../shared/constants';
import { Action, createReducer, on } from '@ngrx/store';
import { productsInitialState, IProductsState } from '../state';

export const userFeatureKey = MWEB_PRODUCTS_KEY;

const reducer = createReducer(
  productsInitialState as IProductsState,
  on(GetAllProducts, state => (
    {
      ...state,
      productsLoading: true,
      products: [],
      productsErrors: null
    }
  )),
  on(GetAllProductsSuccess, (state, { products }) => (
    {
      ...state,
      productsLoading: false,
      products,
      productsErrors: null
    })),
  on(GetAllProductsErrors, (state, { errors }) => (
    {
      ...state,
      productsLoading: false,
      products: null,
      productsErrors: errors
    }
  ))
);

export function ProductsReducer(state: IProductsState , action: Action): IProductsState {
  return reducer(state as IProductsState, action as Action);
}
