import { Component } from '@angular/core';
import { filter, fromEvent, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-challenge10',
  templateUrl: './challenge10.component.html',
  styleUrls: ['./challenge10.component.css'],
})
export class Challenge10Component {
  xPos = 0;
  yPos = 0;
  // circle = document.getElementById('circle')   ev.srcElement as HTMLElement
  // ? (document.getElementById('circle') as HTMLElement)
  // : document
  circle$ = fromEvent(document, 'drag')
    .pipe(
      tap((e) => console.log(e)),
      map((ev) => {
        const e = ev as MouseEvent;
        return {
          src: e.target as HTMLElement,
          left: (<HTMLElement>e.target).offsetLeft,
          top: (<HTMLElement>e.target).offsetTop,
          x: e.clientX,
          y: e.clientY,
        };
      }),
      filter((el) => el.src.id === 'circle'),
      tap((el) => {
        this.xPos = el.x;
        this.yPos = el.y;
        el.src.style.left = `${250}px`;
        el.src.style.top = `${250}px`;
        //(<HTMLElement>srcEl.src).style.backgroundColor = 'red';
        // (<HTMLElement>el.src).style.left = `${this.xPos}px`;
        // this.xPos + 10;
      })
    )
    .subscribe(console.log);
}
