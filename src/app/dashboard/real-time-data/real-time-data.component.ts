import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-real-time-data',
  templateUrl: './real-time-data.component.html',
  styleUrls: ['./real-time-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RealTimeDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get currentDate() {
    return new Date().toLocaleDateString();
  }

  get currentTime() {
    return new Date().toLocaleTimeString();
  }

}
