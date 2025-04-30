import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-controls',
  imports: [],
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.css',
})
export class CounterControlsComponent {
  constructor(private counterService: CounterService) {}

  decrement() {
    this.counterService.decrement();
  }
  increment() {
    this.counterService.increment();
  }
}
