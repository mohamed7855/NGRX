import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] decrement';

// export const incerment = createAction(
//   '[Counter] Increment',
//   props<{ value: number }>()
// );

// export const decrement = createAction(
//   '[Counter] decrement',
//   props<{ value: number }>()
// );

export class IncrementAction implements Action {
  readonly type: string = INCREMENT;
  constructor(public value: number) {}
}

export class DecrementAction implements Action {
  readonly type: string = DECREMENT;
  constructor(public value: number) {}
}

export type CounterActions = IncrementAction | DecrementAction;
