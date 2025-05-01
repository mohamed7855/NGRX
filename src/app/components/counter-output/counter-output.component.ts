import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import {
  selectCounter,
  selectDoubleCounter,
} from '../../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  imports: [AsyncPipe],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css',
})
export class CounterOutputComponent {
  count$: Observable<number>;
  countDouble$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    // this.count$ = this.store.select('counter');

    this.count$ = this.store.select(selectCounter);
    this.countDouble$ = this.store.select(selectDoubleCounter);
  }
}
