// import { createReducer, on } from '@ngrx/store';
// import { decrement, incerment } from './counter.actions';

let initialState = 0;
// export const counterReducer = createReducer(
//   initialState,

//   on(incerment, (state, action) => state + action.value),

//   on(decrement, (state, action) => state - action.value)
// );

export function counterReducer(state = initialState, actions: any) {
  if (actions.type == '[Counter] Increment') {
    return state + actions.value;
  } else if (actions.type == '[Counter] decrement') {
    return state - actions.value;
  }

  return state;
}
