import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IMwebState } from 'src/app/app-store/state';
import { PriceRange } from 'src/app/models/price-ranges/price-range';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let mockStore: MockStore<IMwebState>;

  beforeEach(async(() => {
    const initialState = {
      MWebProductsState: {
        productsLoading: false,
        products: [],
        productsErrors: null
      }
    };

    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [provideMockStore({ initialState })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    mockStore = TestBed.get(Store);
    spyOn(mockStore, 'select').and.callThrough();
    spyOn(mockStore, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should summarize a product', () => {
    const product = {
      promoCode: 'A_PROMO_CODE', products: [
        {
          productCode: 'My PC', productName: 'Product name', category: '',
          subcategory: '', productDescription: '', productRate: 999, productDiscountType: '',
          productDiscountAmount: 0, productDiscountPeriod: 1, productDiscountSequence: 12,
          onceOffCharge: false, summary: '', isHero: false, sellOnline: true,
        }
      ],
      promoCodeDescription: 'One of our most valued',
      promoCodeTagLine: ''
    };

    const summarizedProduct = component.getSummarizedProduct(product.products[0]);

    expect(summarizedProduct.hasOwnProperty('productDiscountAmount')).toEqual(false);
    expect(Object.keys(summarizedProduct).length).toEqual(4);
  });

  it('should get products from promo products', () => {
    const testProduct = {
      promoCode: 'A_PROMO_CODE', products: [
        {
          productCode: 'My PC', productName: 'Product name', category: '',
          subcategory: '', productDescription: '', productRate: 999, productDiscountType: '',
          productDiscountAmount: 0, productDiscountPeriod: 1, productDiscountSequence: 12,
          onceOffCharge: false, summary: '', isHero: false, sellOnline: true,
        },
        {
          productCode: 'My Second PC', productName: 'Product name 2', category: '',
          subcategory: '', productDescription: 'What a lovely product', productRate: 1000, productDiscountType: '',
          productDiscountAmount: 0, productDiscountPeriod: 1, productDiscountSequence: 12,
          onceOffCharge: false, summary: '', isHero: false, sellOnline: true,
        }
      ],
      promoCodeDescription: 'One of our most valued',
      promoCodeTagLine: ''
    };

    const products = component.getProductsFromPromo(testProduct);

    expect(products.length).toEqual(2);
    expect(products[0].hasOwnProperty('productDiscountAmount')).toEqual(false);
  });

  it('should filter products by their provider', () => {
    spyOn(component, 'filterByPriceRanges');

    const providers = [];

    component.selectedPriceRanges = [
      { min: 300, max: 999, label: 'R300 - R999' }
    ];
    component.summarizedProducts = [
      { productCode: 'ONE_TWO', productName: 'Vuma R300', productRate: 300, provider: 'Vuma' },
      { productCode: 'ANOTHER_PRODUCT', productName: 'Vodacom Fibre', productRate: 200, provider: 'Vodacom' },
      { productCode: 'AFRI_FIBRE', productName: 'Afri fibre uncapped', productRate: 300, provider: 'Afri fibre' },
      { productCode: 'AFRIHOST', productName: 'Afrihost R700', productRate: 700, provider: 'Vuma' }];

    const products = component.filterProductByProvider(providers);
    expect(products.length).toEqual(0);
  });

  it('should return true if no price ranges have been selected', () => {
    component.selectedPriceRanges = [];

    const response = component.filterByPriceRanges({});
    expect(response).toEqual(true);
  });

  it('should return true if the product has a range between the specified one', () => {
    component.selectedPriceRanges = [
      { min: 300, max: 999, label: 'R300 - R999' }
    ];

    component.summarizedProducts = [
      { productCode: 'ONE_TWO', productName: 'Vuma R300', productRate: 300, provider: 'Vuma' },
      { productCode: 'ANOTHER_PRODUCT', productName: 'Vodacom Fibre', productRate: 800, provider: 'Vodacom' },
      { productCode: 'AFRI_FIBRE', productName: 'Afri fibre uncapped', productRate: 1200, provider: 'Afri fibre' },
      { productCode: 'AFRIHOST', productName: 'Afrihost Fixed', productRate: 700, provider: 'Afrihost' }];

    const firstCheck = component.filterByPriceRanges(component.summarizedProducts[0]);
    const secondCheck = component.filterByPriceRanges(component.summarizedProducts[2]);

    expect(firstCheck).toEqual(true);
    expect(secondCheck).toEqual(false);
  });

  it('should assign the price filters and provider filters when change detection occurs', () => {
    component.priceFilter = {
      prices: [
        { min: 300, max: 999, label: 'R300 - R999' },
        { min: 0, max: 100, label: 'R0 - R100' }
      ]
    };

    component.providerFilters = {
      providers: ['Vuma', 'Vodacom', 'Telkom']
    };

    spyOn(component, 'filterProductByProvider');

    component.ngOnChanges();

    expect(component.selectedPriceRanges.length).toEqual(2);
    expect(component.filterProductByProvider).toHaveBeenCalledWith(component.providerFilters.providers);
  });
});
