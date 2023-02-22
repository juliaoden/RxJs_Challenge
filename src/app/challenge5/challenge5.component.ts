import { Component, NgModule } from '@angular/core';
import { map, Observable, range, take, takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'app-challenge5',
  templateUrl: './challenge5.component.html',
  styleUrls: ['./challenge5.component.css'],
})
// @NgModule({ declarations: [timer$] })
export class Challenge5Component {
  timerValue = 10;
  timerFinished = false;
  timer$ = timer(0, 1000).pipe(
    map((i) => this.timerValue - i),
    take(this.timerValue + 1),
    tap((number) => number)
  );

  constructor() {
    this.startTimer();
    // this.countTime()
    this.timer$.subscribe(console.log);
  }

  startTimer() {
    const timer$ = timer(0, 1000).pipe(
      map((i) => this.timerValue - i),
      take(this.timerValue + 1)
    );
    /*tap((number) => {
        this.timerValue--;
        if (this.timerValue == 0) this.timerFinished = true;
      })
    );*/

    //timer$.subscribe(console.log);
  }

  onButtonClick() {
    this.timerFinished = false;
    this.timerValue = 10;
    this.startTimer();
  }

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
