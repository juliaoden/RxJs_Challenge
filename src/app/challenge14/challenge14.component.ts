import { Component, ElementRef, Inject } from '@angular/core';
import { filter, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-challenge14',
  templateUrl: './challenge14.component.html',
  styleUrls: ['./challenge14.component.css'],
})
export class Challenge14Component {
  readonly folders = ['memes', 'jokes', 'tips', 'tricks'];

  mouseDown$ = fromEvent(document, 'mousedown');
  mouseMove$ = fromEvent(document, 'mousemove');
  mouseUp$ = fromEvent(document, 'mouseup');

  drag$ = this.mouseDown$
    .pipe(
      tap((el) => {
        //(<HTMLElement>el.target).classList.add('selected');
      })
    )
    .subscribe(console.log);
}
