/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-26
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-26
 */

import React, {Fragment} from "react";
import {fromEvent, of} from "rxjs";
import {concatMap, delay, scan, takeUntil} from "rxjs/operators";
import Counter from "./count/Counter";
import Fetch from "./fetch/fetch";

const DemoApp = () => {

  const observable$ = fromEvent(document, 'click');

  const subscriber = {
    next: (value: any) => {console.log(value);},
    complete: () => {console.log('observable subscribe done')},
    error: (err: any) => {console.error(err)}
  };
  observable$.pipe(
    scan(i => i + 1, 0),
    concatMap((value: any) => of(value).pipe(delay(500))),
    takeUntil(fromEvent(document, 'keydown'))
  ).subscribe(subscriber);

  return (<Fragment>
    <Counter />
    <Fetch />
  </Fragment>)
};

export default DemoApp;
