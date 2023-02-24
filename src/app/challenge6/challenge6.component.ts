import { HtmlParser } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import {
  filter,
  fromEvent,
  map,
  Observable,
  pipe,
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

  // seatCounter$ = new Observable<number>();

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
      map((num: number) => {
        console.log('num: ', num);
        console.log('element', +document.getElementById('count')!.innerHTML);
        console.log(
          'rechnung: ',
          +document.getElementById('count')!.innerHTML + num
        );
        // return document.getElementById('count')! === undefined
        //   ? +document.getElementById('count')!.innerHTML + num
        //   : 0;
        return +document.getElementById('count')!.innerHTML + num;
      })
    );
    // map((el) => (el.classList.contains('seatHidden') ? 1 : -1)),
    // tap((num) => {
    //   const span = document.getElementById('count')!;
    //   span.innerHTML = `${+span.innerHTML + num}`;
    // })
    // .subscribe();
  }
}
