import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appLoadObserv]'
})
export class LoadObservDirective {

  // @Input() Moreitems = false;
  @Output()  DisplayMoreitems = new EventEmitter<any>();

  constructor(public elem: ElementRef) { }
  ngAfterViewInit(){
    const  options = {
      root : null,
      treshhold : 0,
      rootMargin : "-50px"
    };
    const observer = new IntersectionObserver((entries,observer) => {
      entries.forEach(entry => {
        console.log(entry.isIntersecting);
        // this.Moreitems = entry.isIntersecting;
        this.DisplayMoreitems.emit(entry.isIntersecting);
      });
    }, options);

    observer.observe(this.elem.nativeElement);
  }
}
