import { PromoCodeProduct } from './../models/products/product';
import { Campaigns } from './../models/campaigns/campaigns';

export interface ICampaignState {
  campaigns: Campaigns;
  campaignsLoading: boolean;
  campaingsErrors: any;
}

export interface IProductsState {
  products: PromoCodeProduct[];
  productsLoading: boolean;
  productsErrors: any;
}

export interface IMwebState {
  MwebAppState: ICampaignState;
  MwebProductsState: IProductsState;
}

export const initialState: ICampaignState = {
  campaigns: null,
  campaignsLoading: false,
  campaingsErrors: null
};

export const productsInitialState: IProductsState = {
  products: [],
  productsLoading: false,
  productsErrors: null
};
