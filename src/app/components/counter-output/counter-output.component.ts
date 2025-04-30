import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-output',
  imports: [],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css',
})
export class CounterOutputComponent {
  counter = 0;
  counterServiceSub?: Subscription;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterServiceSub = this.counterService.counterChanged.subscribe(
      (newValue) => (this.counter = newValue)
    );
  }

  ngOnDestroy(): void {
    if (this.counterServiceSub) {
      this.counterServiceSub.unsubscribe();
    }
  }
}
