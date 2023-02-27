import { Component, ElementRef, Inject } from '@angular/core';
import {
  filter,
  fromEvent,
  tap,
  switchMapTo,
  take,
  Observable,
  merge,
  map,
} from 'rxjs';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-challenge12',
  templateUrl: './challenge12.component.html',
  styleUrls: ['./challenge12.component.css'],
})
export class Challenge12Component {
  modalClose: Observable<unknown> | undefined;
  constructor(
    @Inject(ModalService) readonly modal$$: ModalService,
    @Inject(ElementRef) { nativeElement }: ElementRef<HTMLElement>
  ) {
    const esc$ = fromEvent(document, 'keydown').pipe(
      filter((ev) => (<KeyboardEvent>ev).key === 'Escape')
    );

    const click$ = fromEvent(nativeElement, 'click').pipe(
      filter(
        (ev) =>
          (<HTMLElement>ev.target).id !== 'modal' &&
          (<HTMLElement>ev.target).id !== 'button'
      )
    );

    const closeModal$ = merge(esc$, click$)
      .pipe(
        tap(() => {
          modal$$.next(null);
        })
      )
      .subscribe();
  }
}

//
