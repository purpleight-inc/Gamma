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
  Rayons : object;
  
  constructor() { 
    this.RayonsDisplay=false;
    this.SearchItemsDisplay=false;
    this.RayonContainerDisplay=false;
    this.Rayons = [
      {
        Rayon :"Meat & Fish",
        Sous_Rayon : ["Poulets","Dinde","Boeuf","Veau","Poisson Frais"]
      },
      {
        Rayon :"Boissons",
        Sous_Rayon : ["Eau","The","Café","Jus de fruits","Boisson gazeuse","Sirop et Boissons concentrée","Boisson énergitique"]
      },
      {
        Rayon :"Entretien & Nettoyage",
        Sous_Rayon : ["Lessives et Soin linge","Papier toilette, Essuie-tout","Désodorisants","Insecticides","Produits vaisselle et nettoyants","Autres accessoires d'entretien"]
      },
      {
        Rayon :"Fruit & Legumes",
        Sous_Rayon : ["Fruit et Legumes sec","Fruit Frais","Legumes Frais","Fleurs et Plantes","Panier Fruits et Legumes"]
      },
      {
        Rayon :"Epicerie Sucrée, Boulangerie",
        Sous_Rayon : ["Chocolats et Bonbons","Biscuits,Cookies,Gateaux","Tartiner et Cereales","Cake et Patisserie","Pain","Ble,Semoule,Farine","Sucre,Preparation gateaux"]
      },
      {
        Rayon :"Epicerie Salée",
        Sous_Rayon : ["Pates,Riz,Nouilles","Conserves et Bocaux","Sauce,Vinigraites,Ketchup","Huile,Vinaigre,Olives","Soupe,Boullions","Snacks","Sel,Epices et Herbes"]
      },
      {
        Rayon :"Surgelés",
        Sous_Rayon : ["Glaces","Plats Cuisiné","Poissons","Viande et Volaille","Legumes","Pates pizza,Tarte"]
      },
      {
        Rayon :"Fromagerie et Créme",
        Sous_Rayon : ["Lait,Boissons lactées","Beurres et Margarines","Créme fraiche et Echantilly","Yaourts,Desserts","Fromages","Oeufs"]
      }
    ];
  }
  
  focus(){
    this.SearchItemsDisplay=true;
    console.log("f");
    $(".SearchB").css( "box-shadow", "0px 0px 0px 1000px rgba(0, 0, 0, 0.4)"); //need to be reviewed
  }
  blur(){
    this.RayonsDisplay=false;
    this.SearchItemsDisplay = false;
    console.log("b");
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
