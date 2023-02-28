import { Component, NgModule } from '@angular/core';
import {
  filter,
  isObservable,
  map,
  Observable,
  pipe,
  range,
  share,
  startWith,
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
  button$ = new Subject<number>();
  timer$ = new Observable<number>();
  isVisible$ = new Observable();
  timerValue = 5;

  constructor() {
    this.startTimer();
    this.timer$.subscribe(this.button$);
  }

  startTimer() {
    this.timer$ = timer(0, 1000).pipe(
      map((sec) => this.timerValue - sec),
      takeWhile((num) => num >= 0),
      share()
    );

    this.isVisible$ = this.timer$.pipe(
      startWith(true),
      map((num) => num > 0),
      share()
    );
  }
}
