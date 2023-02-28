import { AfterViewInit, Component } from '@angular/core';
import {
  combineLatest,
  combineLatestWith,
  filter,
  fromEvent,
  map,
  Observable,
  pipe,
  skipLast,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  timeout,
} from 'rxjs';
import { hsvToRgb, rgbToHex } from './color-tools';

@Component({
  selector: 'app-challenge10',
  templateUrl: './challenge10.component.html',
  styleUrls: ['./challenge10.component.css'],
})
export class Challenge10Component implements AfterViewInit {
  parentEl: HTMLElement | null | undefined;
  parentElLeft: number = 0;
  parentElTop: number = 0;
  CONTAINERWIDTH = 200;
  CONTAINERHEIGHT = 200;
  HUE = 285;
  clamp = (value: number, min: number, max: number): number =>
    Math.min(max, Math.max(min, value));

  ngAfterViewInit(): void {
    this.parentEl = document.getElementById('parent')!;
    this.parentElLeft = this.parentEl.getBoundingClientRect().left;
    this.parentElTop = this.parentEl.getBoundingClientRect().top;
  }

  mouseDown$ = fromEvent(document, 'mousedown');
  mouseUp$ = fromEvent(document, 'mouseup');
  mouseMove$ = fromEvent(document, 'mousemove');

  coordinates$ = this.mouseDown$.pipe(
    filter((ev) => (<HTMLElement>ev.target).id === 'parent'),
    switchMap((down) =>
      this.mouseMove$.pipe(
        map((move) => [(<MouseEvent>move).offsetX, (<MouseEvent>move).offsetY]),
        startWith([(<MouseEvent>down).offsetX, (<MouseEvent>down).offsetY]),
        filter(
          ([x, y]) =>
            x < this.CONTAINERWIDTH &&
            y < this.CONTAINERHEIGHT &&
            x >= 0 &&
            y >= 0
        ),
        takeUntil(this.mouseUp$)
      )
    ),
    startWith([42, 42])
  );

  hsv$: Observable<[number, number, number]> = this.coordinates$.pipe(
    map((coords) => [
      this.HUE,
      +(coords[0] / this.CONTAINERWIDTH).toFixed(2),
      +(
        ((this.CONTAINERHEIGHT - coords[1]) / this.CONTAINERHEIGHT) *
        255
      ).toFixed(2),
    ])
  );

  rgb$ = this.hsv$.pipe(map(hsvToRgb));
  hex$ = this.rgb$.pipe(map(rgbToHex));
}
