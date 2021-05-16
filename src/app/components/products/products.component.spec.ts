import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IMwebState } from 'src/app/app-store/state';

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
      declarations: [ ProductsComponent ],
      providers: [provideMockStore({initialState})]
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
});
