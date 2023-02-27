import { AfterViewInit, Component } from '@angular/core';
import {
  filter,
  fromEvent,
  map,
  Observable,
  pipe,
  skipLast,
  take,
  tap,
  timeout,
} from 'rxjs';

@Component({
  selector: 'app-challenge10',
  templateUrl: './challenge10.component.html',
  styleUrls: ['./challenge10.component.css'],
})
export class Challenge10Component implements AfterViewInit {
  parentEl: HTMLElement | null | undefined;
  parentElLeft: number = 0;
  parentElTop: number = 0;

  ngAfterViewInit(): void {
    this.parentEl = document.getElementById('parent')!;
    this.parentElLeft = this.parentEl.getBoundingClientRect().left;
    this.parentElTop = this.parentEl.getBoundingClientRect().top;
  }

  circle$ = fromEvent(document, 'drag').pipe(
    skipLast(1),
    map((ev) => {
      // ev.preventDefault();
      const e = ev as MouseEvent;
      return {
        src: e.target as HTMLElement,
        mouseY: e.clientY,
        mouseX: e.clientX,
      };
    }),
    filter((el) => el.src.id === 'circle')
  );

  circleLeft$ = this.circle$.pipe(map((el) => el.mouseX - this.parentElLeft));
  circleTop$ = this.circle$.pipe(map((el) => el.mouseY - this.parentElTop));
}
