/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-25
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-25
 */
import {Action, createAction, createReducer} from "@reduxjs/toolkit";
import {Observable} from "rxjs";
import {filter, ignoreElements, tap} from "rxjs/operators";

// actionType
export const increment = createAction<number>('INCREMENT');
export const decrement = createAction<number>('DECREMENT');


// redux reducer
export const counterReducer = createReducer(0, {
  [increment as any]: (state, action) => state + action.payload,
  [decrement as any]: (state, action) => state - action.payload
});


// redux middleware - Epic
export const counterEpic = (action$: Observable<Action>) => action$.pipe(
  filter(decrement.match),
  tap(x => console.log(x)),
  ignoreElements()
);
