import { Observable } from 'rxjs';
import { ColdObservable as RxJsColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { SubscriptionLog } from 'rxjs/internal/testing/SubscriptionLog';

import { Scheduler } from './scheduler';

export class ColdObservable<T = string> extends Observable<any> {
  source: RxJsColdObservable<any>;
  constructor(
    public marbles: string,
    public values?: {
      [marble: string]: T;
    },
    public error?: any
  ) {
    super();

    this.source = Scheduler.get().createColdObservable(marbles, values, error);
  }

  getSubscriptions(): SubscriptionLog[] {
    return this.source.subscriptions;
  }
}
