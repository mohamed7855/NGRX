import { Component } from '@angular/core';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { CounterControlsComponent } from './components/counter-controls/counter-controls.component';

@Component({
  selector: 'app-root',
  imports: [ CounterOutputComponent, CounterControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'NGRX';
}
