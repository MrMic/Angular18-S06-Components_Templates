import {
  afterNextRender,
  afterRender,
  AfterViewInit,
  Component,
  ElementRef, OnInit,
  output, ViewChild
} from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: "app-new-ticket",
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: "./new-ticket.component.html",
  styleUrl: "./new-ticket.component.css",
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild<ElementRef<HTMLFormElement>>('form');
  // private form = viewChild.required<ElementRef<HTMLFormElement>>("form");
  // @Output() add = new EventEmitter<{ title: string, text: string }>();
  add = output<{ title: string, text: string }>();

  // ______________________________________________________________________
  constructor() {
    afterRender(() => {
      console.log("AFTER RENDER");
    });

    afterNextRender(() => {
      console.log("AFTER NEXT RENDER");
    });
  }
  // ______________________________________________________________________
  ngOnInit() {
    console.log("ON INIT");
    console.log(this.form?.nativeElement);
  }

  // ______________________________________________________________________
  ngAfterViewInit() {
    console.log("AFTER VIEW INIT");
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    // console.log(title, ticketText);
    // this.form?.nativeElement.reset();
    // this.form()?.nativeElement.reset();
    this.add.emit({ title, text: ticketText });
    this.form?.nativeElement.reset();
  }
}
