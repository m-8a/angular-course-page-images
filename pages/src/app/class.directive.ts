import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) {
    console.log('Here the directive...');
    this.element.nativeElement.style.backgroundColor = 'orange';
  }
}
