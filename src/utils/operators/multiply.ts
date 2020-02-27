
/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-26
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-26
 */

import {map} from "./map";
import {pipe} from "rxjs";
import {filter} from "rxjs/operators";

// class MultiplySubscribe extends Subscriber<number> {
//
//   constructor(subscriber: any, private readonly num: number) {
//     super(subscriber);
//     this.num = num;
//   }
//
//   _next(value: any) {
//     // @ts-ignore
//     this.destination.next(value * this.num)
//   }
//
// }
//
// export const multiply = (num: number) => (source: any) => source.lift({
//   call(sub: any, source: any) {
//     source.subscribe(new MultiplySubscribe(sub, num))
//   }
// });

// const pipe = (fns: Array<Function>) => (source: any) => fns.reduce((acc, fn) => fn(acc), source);


export const multiply = (num: number) => pipe(
  map((value: number) => value * num),
  filter((value: number) => value < 10)
);
