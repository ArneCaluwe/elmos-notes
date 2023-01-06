import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]',
})
export class StrikethroughDirective implements OnInit, OnChanges {
  @Input() appStrikethrough?: boolean = false;
  private originalColor: string;
  private newColor?: string;

  private originalLineDecoration: string;
  private newLineDecoration?: string;

  constructor(private el: ElementRef) {
    this.originalColor = el.nativeElement.style.color;
    this.originalLineDecoration = el.nativeElement.style.textDecoration;
  }

  ngOnInit(): void {
    this.applyChanges();
  }

  ngOnChanges(): void {
    this.applyChanges();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.appStrikethrough)
      this.el.nativeElement.style.textDecoration = 'line-through';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (!this.appStrikethrough) {
      this.el.nativeElement.style.textDecoration =
        this.newLineDecoration ?? this.originalLineDecoration;
      this.el.nativeElement.style.color = this.newColor ?? this.originalColor;
    }
  }

  applyChanges() {
    if (this.appStrikethrough) {
      this.newColor = 'grey';
      this.newLineDecoration = 'line-through';

      this.el.nativeElement.style.color = this.newColor;
      this.el.nativeElement.style.textDecoration = this.newLineDecoration;
      this.el.nativeElement.style.fontStyle = 'italic';
    }
  }
}
