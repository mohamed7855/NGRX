import { Action } from '@ngrx/store';

// export const incerment = createAction(
//   '[Counter] Increment',
//   props<{ value: number }>()
// );

// export const decrement = createAction(
//   '[Counter] decrement',
//   props<{ value: number }>()
// );

export class IncrementAction implements Action {
  readonly type: string = '[Counter] Increment';
  constructor(public value: number) {}
}

export class DecrementAction implements Action {
  readonly type: string = '[Counter] decrement';
  constructor(public value: number) {}
}
