import { Component, OnDestroy } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  Observable,
  pairwise,
  startWith,
  Subject,
  take,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-challenge7',
  templateUrl: './challenge7.component.html',
  styleUrls: ['./challenge7.component.css'],
})
export class Challenge7Component {
  initialY = 0;
  constructor() {
    fromEvent(document, 'scroll')
      .pipe(
        map(() => document.documentElement.scrollTop),
        tap((el) => {
          const newY = el;
          document
            .querySelector('header')
            ?.classList.toggle('hidden', this.initialY < newY);
          this.initialY = newY;
        }),
        distinctUntilChanged()
      )
      .subscribe();
  }
}
