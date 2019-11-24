import { Directive, ElementRef } from '@angular/core';
import { query } from '@angular/animations';

@Directive({
  selector: '[appFooterObserv]'
})
export class FooterObservDirective {


  constructor(public elem: ElementRef) {
   }
  ngAfterViewInit(){
    const  options = {
      root : null,
      treshhold : 0,
      rootMargin : "-200px"
    };
    const observer = new IntersectionObserver(function(entries,observer){
      entries.forEach(entry => {
        console.log(entry.isIntersecting);
      });
    }, options);

    observer.observe(this.elem.nativeElement);
    
  }
}
