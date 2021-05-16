import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IMwebState } from 'src/app/app-store/state';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockStore: MockStore<IMwebState>;

  beforeEach(async(() => {
    const initialState = {
      campaignsLoading: true,
      campaigns: {},
      campaingsErrors: null
    };

    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [provideMockStore({initialState})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockStore = TestBed.get(Store);
    spyOn(mockStore, 'select').and.callThrough();
    spyOn(mockStore, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(HomeComponent);
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
