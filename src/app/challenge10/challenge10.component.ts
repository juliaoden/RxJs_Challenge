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
  take,
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
  CONTAINERHIGHT = 200;
  HUE = 285;

  ngAfterViewInit(): void {
    this.parentEl = document.getElementById('parent')!;
    this.parentElLeft = this.parentEl.getBoundingClientRect().left;
    this.parentElTop = this.parentEl.getBoundingClientRect().top;
  }

  circle$ = fromEvent(document, 'drag').pipe(
    skipLast(1),
    map((ev) => {
      const e = ev as MouseEvent;
      return {
        src: e.target as HTMLElement,
        mouseY: e.clientY,
        mouseX: e.clientX,
      };
    }),
    filter(
      (el) =>
        el.src.id === 'circle' &&
        el.mouseX > this.parentElLeft &&
        el.mouseY > this.parentElTop &&
        el.mouseX < this.parentElLeft + this.CONTAINERWIDTH &&
        el.mouseY < this.parentElTop + this.CONTAINERHIGHT
    )
  );

  circleLeft$ = this.circle$.pipe(map((el) => el.mouseX - this.parentElLeft));
  circleTop$ = this.circle$.pipe(map((el) => el.mouseY - this.parentElTop));

  hsv$: Observable<[number, number, number]> = this.circleLeft$.pipe(
    combineLatestWith(this.circleTop$),
    map((coords) => [
      this.HUE,
      +(coords[0] / this.CONTAINERWIDTH).toFixed(2),
      +(
        ((this.CONTAINERHIGHT - coords[1]) / this.CONTAINERHIGHT) *
        255
      ).toFixed(2),
    ])
  );

  rgb$ = this.hsv$.pipe(map(hsvToRgb));
  hex$ = this.rgb$.pipe(map(rgbToHex));
}
