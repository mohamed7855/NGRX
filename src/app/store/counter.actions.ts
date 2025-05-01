import { Action, createAction, props } from '@ngrx/store';

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] decrement';

export const incerment = createAction(
  INCREMENT,
  props<{ value: number }>()
);

export const decrement = createAction(
  DECREMENT,
  props<{ value: number }>()
);

// export class IncrementAction implements Action {
//   readonly type: string = INCREMENT;
//   constructor(public value: number) {}
// }

// export class DecrementAction implements Action {
//   readonly type: string = DECREMENT;
//   constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction | DecrementAction;
