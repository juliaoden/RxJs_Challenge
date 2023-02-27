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
  Subscribable,
  filter,
} from 'rxjs';
import { NotificationService } from './notification/notification.service';

@Component({
  selector: 'app-challenge11',
  templateUrl: './challenge11.component.html',
  styleUrls: ['./challenge11.component.css'],
})
export class Challenge11Component {
  text = 'Example';

  constructor(readonly service: NotificationService) {}

  show() {
    this.service.show(this.text).subscribe();
  }
}
