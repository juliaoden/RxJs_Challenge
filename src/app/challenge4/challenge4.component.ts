import { Component, Inject } from '@angular/core';
import {
  distinctUntilChanged,
  filter,
  map,
  share,
  Subject,
  switchMap,
} from 'rxjs';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-challenge4',
  templateUrl: './challenge4.component.html',
  styleUrls: ['./challenge4.component.less'],
})
export class Challenge4Component {
  private readonly load$ = new Subject<void>();
  private readonly response$ = this.load$.pipe(
    switchMap(() => this.loadingService.load()),
    share()
  );
  readonly result$ = this.response$.pipe(
    map((el) => (typeof el === 'string' ? el : null)),
    distinctUntilChanged()
  );
  readonly loadingProgress$ = this.response$.pipe(filter(Number.isFinite));

  constructor(
    @Inject(LoadingService) private readonly loadingService: LoadingService
  ) {}

  onButtonClick() {
    this.load$.next();
  }
}
