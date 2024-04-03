import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VacanzeComponent } from './vacanze/vacanze.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,VacanzeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'es-ripasso';
}
