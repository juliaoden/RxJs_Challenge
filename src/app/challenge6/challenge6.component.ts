import { Component, ViewChild } from '@angular/core';
import { fromEvent, map, Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-challenge6',
  templateUrl: './challenge6.component.html',
  styleUrls: ['./challenge6.component.css'],
})
export class Challenge6Component {
  seatCounter = 0;
  buying = false;
  text = '';

  seatChosen() {
    const seats$ = fromEvent(document, 'click').pipe(
      map((el) => el.target as HTMLButtonElement),
      take(1),
      tap((el) => {
        //console.log(el);
        if (!el.classList.contains('seatHidden')) {
          el.classList.add('seatHidden');
          this.seatCounter++;
        } else {
          el.classList.remove('seatHidden');
          this.seatCounter--;
        }
      })
    );

    seats$.subscribe();
  }

  buySeats() {
    this.buying = true;
    if (this.seatCounter <= 0) {
      this.text = 'Please select at least one seat';
    } else {
      this.text = `Price is ${this.seatCounter * 3}`;
    }
  }
}
