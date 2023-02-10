import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TrollComponent } from './troll/troll.component';

@Component({
  imports: [CommonModule, TrollComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  isTrolling = false;
  isTransformed = false;
  title: 'Trolling' | 'Just a sweet troll' = 'Just a sweet troll';

  toggleTrolling() {
    this.isTrolling = !this.isTrolling;
    this.title = this.isTrolling ? 'Trolling' : 'Just a sweet troll';
  }
}
