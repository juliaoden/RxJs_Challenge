import { NgIfContext } from '@angular/common';
import { HtmlParser } from '@angular/compiler';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import {
  filter,
  fromEvent,
  map,
  mergeMap,
  Observable,
  of,
  pipe,
  scan,
  startWith,
  Subject,
  switchMap,
  take,
  tap,
  timeout,
} from 'rxjs';

@Component({
  selector: 'app-challenge6',
  templateUrl: './challenge6.component.html',
  styleUrls: ['./challenge6.component.css'],
})
export class Challenge6Component {
  seatCounter = 0;
  seats$ = new Observable<number>();
  seatCounter$ = new Observable<number>();

  constructor() {}

  buying$ = fromEvent(document, 'click')
    .pipe(
      filter((ev) => (<HTMLElement>ev.target).id === 'btn'),
      map(() => document.getElementById('final-cost')!),
      tap((el) => {
        if (this.seatCounter <= 0) {
          el.innerHTML = 'Please select at least one seat';
        } else {
          el.innerHTML = `Price is ${this.seatCounter * 3}`;
        }
        return true;
      })
    )
    .subscribe();

  seatChosen() {
    this.seats$ = fromEvent(document, 'click').pipe(
      map((el) => el.target as HTMLButtonElement),
      take(1),
      map((el) => {
        console.log(el);
        if (!el.classList.contains('seatHidden')) {
          el.classList.add('seatHidden');
          return 1;
        } else {
          el.classList.remove('seatHidden');
          return -1;
        }
      })
    );

    this.seatCounter$ = this.seats$.pipe(
      // scan((sum, n) => sum + n),
      map((num: number) => {
        this.seatCounter += num;
        return this.seatCounter;
      })
    );
  }
}
