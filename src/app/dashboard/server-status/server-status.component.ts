import { Component, DestroyRef, effect, inject, OnInit, signal } from "@angular/core";

@Component({
  selector: "app-server-status",
  standalone: true,
  imports: [],
  templateUrl: "./server-status.component.html",
  styleUrl: "./server-status.component.css",
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<"online" | "offline" | "unknown">("online");
  // private interval?: ReturnType<typeof setTimeout>;
  // * INFO: Available for Angular >= 16
  private destroyref = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    })
  }

  ngOnInit() {
    console.log("ON INIT");

    const interval = setInterval(() => {
      const rnd = Math.random(); //* INFO:  [0 - 1[
      if (rnd < 0.5) {
        this.currentStatus.set("online");
      } else if (rnd < 0.8) {
        this.currentStatus.set("offline");
      } else {
        this.currentStatus.set("unknown");
      }
    }, 3000);

    this.destroyref.onDestroy(() => clearInterval(interval));
  }

  ngAfterViewInit() {
    console.log("afterViewInit");
  }

  // ngOnDestroy() {
  //   clearInterval(this.interval);
  // }
}
