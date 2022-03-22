import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements AfterViewInit {
  @Input() highlightColor: string;
  @Input() showOpacity: string;
  @Input() hideOpacity: string;

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.style.backgroundColor = 'yellow';
  }
  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseover') onmouseover() {
    this.elRef.nativeElement.style.opacity = this.hideOpacity;
  }
  @HostListener('mouseout') onmouseout() {
    this.elRef.nativeElement.style.opacity = this.showOpacity;
  }
}
