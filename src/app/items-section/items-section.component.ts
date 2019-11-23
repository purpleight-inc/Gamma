import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-section',
  templateUrl: './items-section.component.html',
  styleUrls: ['./items-section.component.scss']
})
export class ItemsSectionComponent implements OnInit {

  bookmarked: boolean;
  emptyCart: boolean;
  ProductQuantity: number;
  ShowMore: boolean;

  constructor() { 
    this.ProductQuantity = 0;
    this.ShowMore = false;
    this.emptyCart= true;
  }

  ngOnInit() {

  }
  ngAfterViewInit(){
    this.bookmarked= false;
    
  }

  ShowBasketControl(){
    this.emptyCart = !this.emptyCart
    if(this.emptyCart== true) this.ProductQuantity = 0;
    this.ProductQuantity = 1;
  }
  
  itemsQuantity(op : string){
    op == '+' ? this.ProductQuantity++ : this.ProductQuantity--;
    if(this.ProductQuantity < 0) this.ProductQuantity = 0;
  }

}
