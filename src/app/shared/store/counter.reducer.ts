import { createReducer, on } from '@ngrx/store';
import { decreament, increament, reset } from './counter.action';
import { intialState } from './counter.state';

const _counterReducer = createReducer(
  intialState,
  on(increament, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decreament, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      counter: state.counter,
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
