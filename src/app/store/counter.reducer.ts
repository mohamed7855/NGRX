import { createReducer, on } from '@ngrx/store';
import { decrement, incerment } from './counter.actions';

// import { Action } from '@ngrx/store';
// import {
//   CounterActions,
//   DECREMENT,
//   DecrementAction,
//   INCREMENT,
//   IncrementAction,
// } from './counter.actions';

let initialState = 0;
export const counterReducer = createReducer(
  initialState,

  on(incerment, (state, action) => state + action.value),

  on(decrement, (state, action) => state - action.value)
);

// export function counterReducer(state = initialState, actions: Action) {
//   if (actions.type == INCREMENT) {
//     return state + (actions as CounterActions).value;
//   } else if (actions.type == DECREMENT) {
//     return state - (actions as CounterActions).value;
//   }

//   return state;
// }
