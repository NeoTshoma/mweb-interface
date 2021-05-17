import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store/src/models';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CampaignsService } from 'src/app/services/campaigns/campaigns.service';
import { GetAllCampaigns, GetAllCampaignsError, GetAllCampaignsSuccess } from '../actions/campaigns.action';

@Injectable()
export class CampaignsEffects {
  constructor(
    private action$: Actions,
    private campaingsService: CampaignsService
  ) { }

  getCampaigns$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(GetAllCampaigns),
      switchMap((action: any) => {
        return this.campaingsService.getCampaigns().pipe(
          map((res) => GetAllCampaignsSuccess({campaigns: res})),
          catchError((error) => of(GetAllCampaignsError({errors: error})))
        );
      })
    )
  );
}
