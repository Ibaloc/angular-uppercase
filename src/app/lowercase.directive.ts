import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[lowercase]',
})
export class LowercaseDirective {
  constructor(public ref: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event) {
    this.ref.nativeElement.value = event.target.value.toLowerCase();
  }
}
