import { createSelector } from '@ngrx/store';

export const selectCounter = (state: { counter: number }) => state.counter;
// export const selectDoubleCounter = (state:{counter:number})=> state.counter * 2

export const selectDoubleCounter = createSelector(selectCounter, (state) =>   state * 2);
