import { Component, NgModule } from '@angular/core';
import {
  filter,
  isObservable,
  map,
  Observable,
  pipe,
  range,
  share,
  Subject,
  take,
  takeWhile,
  tap,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-challenge5',
  templateUrl: './challenge5.component.html',
  styleUrls: ['./challenge5.component.css'],
})
export class Challenge5Component {
  timer$ = new Observable<number>();
  isVisible$ = new Observable();
  timerValue = 11;

  constructor() {
    this.startTimer();
  }

  startTimer() {
    this.timer$ = timer(0, 1000).pipe(
      map((i) => this.timerValue - i),
      take(this.timerValue + 1),
      share()
    );

    this.isVisible$ = this.timer$.pipe(
      map((num) => num > 0),
      share()
    );
  }
}
