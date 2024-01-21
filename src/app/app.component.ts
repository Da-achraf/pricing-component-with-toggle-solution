import {Component, computed, signal} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  isMonthly = signal<boolean>(true)

  prices = computed(() => ({
    basic: this.isMonthly() ? 19.99 : 199.99,
    professional: this.isMonthly() ? 24.99 : 249.99,
    master: this.isMonthly() ? 39.99 : 399.99
  }))

  toggleIsMonthly() {
    this.isMonthly.set(!this.isMonthly())
  }
}
