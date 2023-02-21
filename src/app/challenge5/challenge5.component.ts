import { Component } from '@angular/core';
import { Observable, range, takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'app-challenge5',
  templateUrl: './challenge5.component.html',
  styleUrls: ['./challenge5.component.css'],
})
export class Challenge5Component {
  timerValue = 10;
  timerFinished = false;

  constructor() {
    this.startTimer();
    // this.countTime()
  }

  startTimer() {
    const timer$ = timer(0, 1000).pipe(
      takeWhile(() => this.timerValue > 0),
      tap(() => {
        this.timerValue--;
        if (this.timerValue == 0) this.timerFinished = true;
      })
    );

    timer$.subscribe();
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
