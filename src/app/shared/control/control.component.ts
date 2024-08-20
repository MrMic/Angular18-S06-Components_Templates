import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // * INFO: For backwards compatibility
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log("🪚 CLICKED!:");
  // }

  label = input.required<string>();

  onClick() {
    console.log("🪚 CLICKED!:");
  }
}
