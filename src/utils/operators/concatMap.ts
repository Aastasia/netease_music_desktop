import {Subscriber} from "rxjs";

/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-26
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-26
 */

class MyConcatMapSubscriber extends Subscriber<any> {
  private innerSubscription: any;
  private buffer: Array<any> = [];
  constructor(subscriber: Subscriber<any>, private readonly fn: Function) {
    super(subscriber);
    this.fn = fn;
  }

  protected _next(value: any): void {

    const {isStopped} = this.innerSubscription || {isStopped: true};

    if(!isStopped) {
      this.buffer = [...this.buffer, value];
    } else {

      const o$ = this.fn(value);
      this.innerSubscription = o$.subscribe({
        next: (value: any) => {
          // @ts-ignore
          this.destination.next(value);
        },

        complete: () => {
          if(this.buffer.length) {
            const [first, ...rest] = this.buffer;
            this.buffer = rest;
            this._next(first);
          }
        }

      });

      this.add(this.innerSubscription);
    }


  }
}

export const concatMap = (fn: any) => (source: any) => source.lift({
  call(subscriber: Subscriber<any>, source: any): any {
    source.subscribe(new MyConcatMapSubscriber(subscriber, fn))
  }
});
