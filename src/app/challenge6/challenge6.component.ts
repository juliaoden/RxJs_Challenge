import { HtmlParser } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { filter, fromEvent, map, Observable, pipe, take, tap } from 'rxjs';

@Component({
  selector: 'app-challenge6',
  templateUrl: './challenge6.component.html',
  styleUrls: ['./challenge6.component.css'],
})
export class Challenge6Component {
  seatCounter = 0;

  buying$ = fromEvent(document, 'click')
    .pipe(
      filter((ev) => (<HTMLElement>ev.target).id === 'btn'),
      map(() => document.getElementById('final-cost')),
      tap((el) => {
        if (el)
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
    const seats$ = fromEvent(document, 'click').pipe(
      map((el) => el.target as HTMLButtonElement),
      take(1),
      tap((el) => {
        if (!el.classList.contains('seatHidden')) {
          el.classList.add('seatHidden');
          this.seatCounter++;
          return 1;
        } else {
          el.classList.remove('seatHidden');
          this.seatCounter--;
          return -1;
        }
      })
    );

    const seatCounter$ = seats$.subscribe();
  }
}
