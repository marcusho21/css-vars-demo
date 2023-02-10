import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-troll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './troll.component.html',
  styleUrls: ['./troll.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TrollComponent {
  @Input() isTrolling = false;
  @Input() title = 'Troll';
}
