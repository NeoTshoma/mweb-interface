import { getProducts, getProductsErrors, getProductsLoading } from './../../app-store/selectors/products.selector';
import { PromoCodeProduct, SummarizedProduct } from './../../models/products/product';
import { Component, OnDestroy, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IMwebState } from 'src/app/app-store/state';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy, OnChanges {

  @Output() getProviders: EventEmitter<string[]> = new EventEmitter();
  @Input() providerFilters: any;
  @Input() priceFilter: any;

  products: PromoCodeProduct[];
  private ngUnsubscribe = new Subject();
  productsLoading$: Observable<boolean>;
  productsErrors$: Observable<any>;
  summarizedProducts: SummarizedProduct[] = [];
  promoCodeProducts: PromoCodeProduct[] = [];
  selectedProducts: SummarizedProduct[] = [];
  selectedProviderSet: any;
  providers: string[];
  selectedPriceRanges: any[] = [];

  constructor(private store: Store<IMwebState>) { }

  ngOnInit() {
    this.productsLoading$ = this.store.select(getProductsLoading);
    this.productsErrors$ = this.store.select(getProductsErrors);

    this.store.select(getProducts).pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe((products) => {
      if (products) {
        this.products = products;

        this.products.map((product) => {
          this.promoCodeProducts.push(this.getProductsFromPromo(product));
        });

        this.summarizedProducts = this.products.reduce((prods, pc) => [...prods, ...this.getProductsFromPromo(pc)], []);
        this.providers = [...new Set(this.summarizedProducts.map(p => p.provider))];
        this.getProviders.emit(this.providers);
      }
    });
  }

  getSummarizedProduct = ({ productCode, productName, productRate, subcategory }) => {
    const provider = subcategory.replace('Uncapped', '').replace('Capped', '').trim();
    return { productCode, productName, productRate, provider };
  }

  getProductsFromPromo = (pc) => {
    const promoCode = pc.promoCode;
    return pc.products.reduce((prods, p) => [...prods, this.getSummarizedProduct(p)], []);
  }

  filterProductByProvider(providers) {
    const selectedProviderSet = new Set(providers);
    let selectedProducts = this.summarizedProducts.filter(p => selectedProviderSet.has(p.provider));

    selectedProducts = selectedProducts.filter(this.filterByPriceRanges);

    selectedProducts = selectedProducts.sort((pa, pb) => pa.productRate - pb.productRate);
    return selectedProducts;
  }

  filterByPriceRanges = (product) => {
    if (this.selectedPriceRanges.length === 0) {
      return true;
    }

    for (const range of this.selectedPriceRanges) {
      const price = product.productRate;
      if (price >= range.min && price <= range.max) {
        return true;
      }
    }

    return false;
  }

  ngOnChanges() {
    this.selectedPriceRanges = this.priceFilter ? this.priceFilter.prices : [];
    this.selectedProducts = this.filterProductByProvider(this.providerFilters ?  this.providerFilters.providers : [] );
  }


  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
