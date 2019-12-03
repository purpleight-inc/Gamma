import { Component, OnInit } from '@angular/core';
import { ChangeSign } from './SignChanger.component.animation';

@Component({
  selector: 'app-rayon-items-section',
  templateUrl: './rayon-items-section.component.html',
  styleUrls: ['./rayon-items-section.component.scss'],
  animations: [ ChangeSign ]
})
export class RayonItemsSectionComponent implements OnInit {

  bookmarked: boolean;
  emptyCart: boolean;
  ProductQuantity: number;
  ShowMore: boolean;
  items: number[];
  Moreitems: boolean;
  FilterBy: {name: string, sign: boolean}[];
  w : {name: string, sign: boolean};

  constructor() { 
    this.ProductQuantity = 0;
    this.ShowMore = false;
    this.emptyCart= true;
    this.Moreitems = false;
    this.items= [];
    for(let i=1; i<=40; i++){ 
      this.items.push(i);
    }
    this.FilterBy = [{name : "", sign:false}];
    this.w = {name : "", sign:false};
  }

  ngOnInit() {
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
  ChangeFilterSign(name: string){

      let i = this.FilterBy.findIndex(element =>  element.name == name); 
      if( i == -1) {this.FilterBy.push({name:name,sign:true}); this.w = {name:name,sign:true};}
      else {this.FilterBy[i].sign = !this.FilterBy[i].sign;
      this.w = this.FilterBy[i];}
  }
  AssignFilter(name : string){
    let i = this.FilterBy.findIndex(element =>  element.name == name); 
    if( i == -1) { return ""; }
    else return this.FilterBy[i].sign ? "+" : "-";
  }
}
