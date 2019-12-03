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
  items: number[];
  Moreitems: boolean;

  constructor() { 
    this.ProductQuantity = 0;
    this.ShowMore = false;
    this.emptyCart= true;
    this.Moreitems = false;
    this.items = [];
    for(let i=1; i<=8; i++){ 
      this.items.push(i);
    }
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

  DisplayMoreitems(Moreitems: boolean){
    this.Moreitems = Moreitems;
    if(this.Moreitems == true) this.items.push(1,2,3,4,5,6,7,8);
  }

}
