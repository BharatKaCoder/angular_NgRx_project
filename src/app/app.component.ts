import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterButtonComponent } from './component/counter-button/counter-button.component';
import { CounterDisplyComponent } from './component/counter-disply/counter-disply.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterButtonComponent, CounterDisplyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_NgRx_project';
}
