import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-disply',
  standalone: true,
  imports: [],
  templateUrl: './counter-disply.component.html',
  styleUrl: './counter-disply.component.css'
})
export class CounterDisplyComponent {

  displayCounter!:number;

  constructor(private _store:Store<{counter:{counter:number}}>) {}

  ngOnInit():void {
    this._store.select("counter").subscribe((value:any)=>{
      this.displayCounter = value.counter;
    })
  }
}
