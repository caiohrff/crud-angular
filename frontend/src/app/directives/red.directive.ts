import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPurple]'
})
export class RedDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.cor = '#993399'
  }

}
