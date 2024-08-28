import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: "online" | "offline" | "unknown" = 'online';
  private interval?: ReturnType<typeof setTimeout>;

  constructor() { }

  ngOnInit() {
    console.log('ON INIT');

    this.interval = setInterval(() => {
      const rnd = Math.random(); //* INFO:  [0 - 1[
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.8) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 3000)
  }

  ngAfterViewInit() {
    console.log('afterViewInit');
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
