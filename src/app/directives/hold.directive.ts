import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Subject, takeUntil, timer } from 'rxjs';

@Directive({
  selector: '[appHold]',
})
export class HoldDirective {
  @Input('appHold')
  holdDuration?: number = 1500;

  @Output()
  eventEmitted = new EventEmitter<void>();

  private reset$: Subject<void> = new Subject();

  @HostListener('mousedown')
  onKeyPressed() {
    timer(this.holdDuration!)
      .pipe(takeUntil(this.reset$))
      .subscribe(() => this.eventEmitted.next());
  }

  @HostListener('mouseup')
  @HostListener('mouseleave')
  onKeyReleased() {
    this.reset$.next();
  }
}
