import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { incerment } from './counter.actions';
import { tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCounter } from './counter.selector';

export class CounterEffects {
  private readonly _actions = inject(Actions);
  private readonly _store = inject(Store);

  saveCount = createEffect(
    () =>
      this._actions.pipe(
        ofType(incerment),
        withLatestFrom(this._store.select(selectCounter)),
        tap(([action, counter]) => {
          console.log(action);
          localStorage.setItem('count', counter.toString());
        })
      ),
    { dispatch: false }
  );
}
