import { Component, OnInit } from '@angular/core';
import { filter, from, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-challenge2',
  templateUrl: './challenge2.component.html',
  styleUrls: ['./challenge2.component.css'],
})
export class Challenge2Component implements OnInit {
  ngOnInit() {
    const visibility$ = fromEvent(document, 'visibilitychange').pipe(
      map(() => document.hidden),
      tap((isVisible) => {
        if (isVisible) {
          console.log('Document hidden');
        } else {
          console.log('Document no longer hidden');
        }
      })
    );

    visibility$.subscribe();
  }
}
