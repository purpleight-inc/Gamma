import { ExpandMenuRayon, ExpandSearchContainer, RayonContainerAnim} from './MenuDisplay.component.animation';
import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations:[ ExpandMenuRayon, ExpandSearchContainer, RayonContainerAnim]
})
export class NavBarComponent implements OnInit {

  RayonsDisplay: boolean;
  SelectedMenu: String;
  SelectedRayon: String;
  SearchItemsDisplay : boolean;
  RayonContainerDisplay: boolean;
  
  constructor() { 
    this.RayonsDisplay=false;
    this.SearchItemsDisplay=false;
    this.RayonContainerDisplay=false;
  }
  
  focus(){
    this.SearchItemsDisplay=true;
    $(".SearchB").css( "box-shadow", "0px 0px 0px 1000px rgba(0, 0, 0, 0.4)"); //need to be reviewed
  }
  blur(){
    this.RayonsDisplay=false;
    this.SearchItemsDisplay = false;
    $(".SearchB").css( "box-shadow", "0 0 5px 0.5px rgba(0, 0, 0, 0.25)"); //need to be reviewed
  }
  
  public Mousein(SelectedRayon: string){
    this.RayonContainerDisplay=true;
    this.SelectedRayon=SelectedRayon;
  }
  public Mouseout(){
    this.RayonContainerDisplay=false;
  }
  
  public MenuDisplay(SelectedMenu: String){
      if(this.SelectedMenu != SelectedMenu){
        this.RayonsDisplay = true;
        this.SelectedMenu = SelectedMenu;
      }
      else{
      this.RayonsDisplay=!this.RayonsDisplay;
      }
  }
  ngOnInit() {
  }

}
