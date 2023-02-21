import { Component, OnInit } from '@angular/core';
import { fromEvent, map, merge, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-challenge1',
  templateUrl: './challenge1.component.html',
  styleUrls: ['./challenge1.component.css']
})
export class Challenge1Component implements OnInit{
  ngOnInit() {
    const focusin$ = fromEvent(document, "focusin").pipe(
      map((el) => el.target as HTMLElement),
      tap((target) => { 
        target.classList.add("focused")
      })
    )

    const focusout$ = fromEvent(document, "focusout").pipe(
      map((el) => el.target as HTMLElement),
      tap((target) => { 
        target.classList.remove("focused")
      })
    )

    const focus$ = merge(focusin$, focusout$)
    focus$.subscribe();
  }
  
}
