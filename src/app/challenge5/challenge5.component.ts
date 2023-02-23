import { Component, NgModule } from '@angular/core';
import {
  filter,
  isObservable,
  map,
  Observable,
  pipe,
  range,
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
// @NgModule({ declarations: [timer$] })
export class Challenge5Component {
  // timer$ = new Subject<any>();
  timerValue = 10;

  timer$ = timer(0, 1000).pipe(
    map((i) => this.timerValue - i),
    take(this.timerValue + 1),
    tap((e) => console.log(e))
  );

  isVisible$ = this.timer$.pipe(
    filter((num) => num != 0),
    map((num) => num >= 0),
    tap((e) => console.log(e))
  );

  startTimer() {
    //this.isVisible$.subscribe(console.log);
  }
  /*tap((number) => {
        this.timerValue--;
        if (this.timerValue == 0) this.timerFinished = true;
      })
    );*/

  //timer$.subscribe(console.log);

  // onButtonClick() {
  //   this.timerFinished = false;
  //   this.timerValue = 10;
  //   this.startTimer();
  // }

  /*countTime(){
    this.timeOver = false
    const timer$ = timer(5000).pipe(
      tap(()=>{
        this.timeOver = true;
      })
    )

    timer$.subscribe()
  }
  countTime(){
    this.timeOver = false
    setTimeout(() => {
      console.log("Timer doen")
      this.timeOver = true;
    }, 5000)
  }*/
}
