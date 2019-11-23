import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFooterObserv]'
})
export class FooterObservDirective {


  constructor(public elem: ElementRef) {
   }
  ngAfterViewInit(){
    const  options = {};
    const observer = new IntersectionObserver(function(entries,observer){
      entries.forEach(entry => {
        console.log(entry)
      });
    }, options);
    
    observer.observe(this.elem.nativeElement);
  }
}
