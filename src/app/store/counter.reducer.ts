import { createReducer, on } from '@ngrx/store';
import { decrement, incerment } from './counter.actions';

let initialState = 0;
export const counterReducer = createReducer(
  initialState,

  on(incerment, (state, action) => state + action.value),

  on(decrement, (state, action) => state - action.value)
);
