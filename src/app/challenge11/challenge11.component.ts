import { Component, ElementRef, Inject } from '@angular/core';
import {
  fromEvent,
  Observable,
  timer,
  tap,
  concatMap,
  of,
  pipe,
  Subject,
} from 'rxjs';

@Component({
  selector: 'app-challenge11',
  templateUrl: './challenge11.component.html',
  styleUrls: ['./challenge11.component.css'],
})
export class Challenge11Component {
  constructor(@Inject(ElementRef) { nativeElement }: ElementRef<HTMLElement>) {
    const toast$ = fromEvent(nativeElement, 'submit')
      .pipe()
      .subscribe(console.log);
  }
}
