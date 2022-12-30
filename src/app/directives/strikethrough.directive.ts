import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]',
})
export class StrikethroughDirective implements OnInit {
  @Input() appStrikethrough?: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.appStrikethrough) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.fontStyle = 'italic';
      this.el.nativeElement.style.color = 'grey';
    }
  }
}
