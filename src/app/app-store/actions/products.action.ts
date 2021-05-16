import { PromoCodeProduct } from '../../models/products/product';
import { createAction, props } from '@ngrx/store';

export const GetAllProducts = createAction(
  '[MARKETING] Get all products',
  props<{promocodes: string}>()
);
export const GetAllProductsSuccess = createAction(
  '[MARKETING] Get all products success',
  props<{ products: PromoCodeProduct[] }>()
);

export const GetAllProductsErrors = createAction(
  '[MARKETING] Get all products error',
  props<{ errors: any }>()
);
