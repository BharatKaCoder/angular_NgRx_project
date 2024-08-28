import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decreament, increament, reset } from '../../shared/store/counter.action';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {

  constructor(private _store:Store<{counter:{counter:number}}>) {}

  onIncriment() {
    this._store.dispatch(increament());
  }

  onDecriment() {
    this._store.dispatch(decreament());
  }

  onReset() {
    this._store.dispatch(reset());
  }
}
