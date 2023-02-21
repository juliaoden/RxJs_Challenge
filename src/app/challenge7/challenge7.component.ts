import { Component, OnDestroy } from '@angular/core';
import {
  distinctUntilChanged,
  fromEvent,
  map,
  Observable,
  Subject,
  take,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-challenge7',
  templateUrl: './challenge7.component.html',
  styleUrls: ['./challenge7.component.css'],
})
export class Challenge7Component {
  constructor() {}
}
