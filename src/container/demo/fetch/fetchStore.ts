/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-25
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-25
 */
import {Action, createAction, createReducer} from "@reduxjs/toolkit";
import {Observable} from "rxjs";
import {filter, ignoreElements, map, switchMap, tap} from "rxjs/operators";
import {ofType} from "redux-observable";
import {ajax} from "rxjs/ajax";

export const fetchUser = createAction('FETCH_USER', login => ({payload: login}));
export const fetchUserFulfilled = createAction('FETCH_USER_FULFILLED', user => ({payload: user}));

const initialState = {
  users: [
    'shakyshane',
    'sindresorhus',
    'substack'
  ],
  current: null,
  loading: false
};

// redux - reducer
export const fetchReducer = createReducer(initialState, {
  [fetchUser as any]: (state, action) => ({...state, current: null, loading: true}),
  [fetchUserFulfilled as any]: (state, action) => ({...state, current: action.payload, loading: false})
});

// redux middleware - Epic
export const fetchEpic = (action$: Observable<Action>) => action$.pipe(
  filter(fetchUser.match),
  // tap(console.log),
  // ignoreElements()
  // @ts-ignore
  switchMap((action: any) => ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
    map(user => fetchUserFulfilled(user))
  )),
  tap(console.log),

);
