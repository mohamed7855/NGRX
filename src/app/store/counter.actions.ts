import { createAction, props } from '@ngrx/store';

export const incerment = createAction(
  '[Counter] Increment',
  props<{ value: number }>()
);

export const decrement = createAction(
  '[Counter] decrement',
  props<{ value: number }>()
);
