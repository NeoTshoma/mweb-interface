import { getProducts, getProductsErrors, getProductsLoading } from './../../app-store/selectors/products.selector';
import { PromoCodeProduct } from './../../models/products/product';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IMwebState } from 'src/app/app-store/state';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: PromoCodeProduct[];
  private ngUnsubscribe = new Subject();
  productsLoading$: Observable<boolean>;
  productsErrors$: Observable<any>;

  constructor(private store: Store<IMwebState>) { }

  ngOnInit() {
    this.productsLoading$ = this.store.select(getProductsLoading);
    this.productsErrors$ = this.store.select(getProductsErrors);

    this.store.select(getProducts).pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe((products) => {
      this.products = products;
    });
  }

  ngOnDestroy() {

  }

}
