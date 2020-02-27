/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-26
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-26
 */
import {Subscriber} from "rxjs";

class MapSubscriber extends Subscriber<any> {
  constructor(subscriber: any, private readonly fn: any) {
    super(subscriber);
    this.fn = fn;
  }

  _next(value: any) {
    // @ts-ignore
    this.destination.next(this.fn(value))
  }
}

export const map = (fn: any) => (source: any) => source.lift({
  call(subscriber: Subscriber<any>, source: any): any {
    source.subscribe(new MapSubscriber(subscriber, fn));
  }
});
