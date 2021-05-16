import { GetAllProductsSuccess, GetAllProducts, GetAllProductsErrors } from './../actions/products.action';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store/src/models';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products/products.service';

@Injectable()
export class ProductEffects {
  constructor(
    private action$: Actions,
    private productsService: ProductsService
  ) { }

  getCampaigns$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(GetAllProducts),
      switchMap((action: any) => {
        return this.productsService.getProducts(action.promocodes).pipe(
          map((res) => GetAllProductsSuccess({ products: res })),
          catchError((error) => of(GetAllProductsErrors({ errors: error })))
        );
      })
    )
  );
}
