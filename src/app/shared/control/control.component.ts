import {
  AfterContentInit,
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-control",
  standalone: true,
  imports: [],
  templateUrl: "./control.component.html",
  styleUrl: "./control.component.css",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "control",
    "(click)": "onClick()",
  },
})
export class ControlComponent implements AfterContentInit {
  // * INFO: For backwards compatibility
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log("🪚 CLICKED!:");
  // }

  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>("input");


  ngAfterContentInit(): void {
    //...
  }

  onClick() {
    console.log("🪚 CLICKED!:");
    console.log("🪚 el:", this.el);
    console.log("🪚 control:", this.control());
  }
}
