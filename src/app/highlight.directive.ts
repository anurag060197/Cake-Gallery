import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private _element: ElementRef) { 
    console.log("using directive..."+ this._element.nativeElement);
    this._element.nativeElement.style.color = 'red'
    
  }

}
