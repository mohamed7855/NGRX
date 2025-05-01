import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { DecrementAction, IncrementAction } from '../../store/counter.actions';
import { decrement, incerment } from '../../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  imports: [],
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.css',
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  decrement() {
    this.store.dispatch(decrement({ value: 5 }));
    // this.store.dispatch(new DecrementAction(5));
  }

  increment() {
    this.store.dispatch(incerment({ value: 5 }));
    // this.store.dispatch(new IncrementAction(5));
  }
}
