import { Component, OnInit, Input } from '@angular/core';
import { HideRayon, DisplayMenu } from './MenuDropDown.component.animation';

@Component({
  selector: 'app-side-nav-filter',
  templateUrl: './side-nav-filter.component.html',
  styleUrls: ['./side-nav-filter.component.scss'],
  animations:[ HideRayon,DisplayMenu ]
})
export class SideNavFilterComponent implements OnInit {

  @Input() Rayon :string;
  @Input() SousRayon :string;

  RayonDisplay : boolean;
  SelectedRayon: string;
  Rayons : object;
  Active : boolean;

  constructor() { 
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
      this.RayonDisplay = false;
      this.SelectedRayon = "";
      // console.log("t"+this.Rayon);
      
  }

  ngOnInit() {

    if(this.Rayon != undefined){
      this.RayonDisplay = true;
      this.SelectedRayon = this.Rayon;
    }
    console.log("init");
  }

  ngOnChanges(){
    if(this.Rayon != undefined){
      this.RayonDisplay = true;
      this.SelectedRayon = this.Rayon;
    }
    console.log("init");
  }

  HideRayon(Rayon : string){
    this.RayonDisplay = !this.RayonDisplay;
    this.SelectedRayon = Rayon;
    // if(this.RayonDisplay == false) this.Active = false;
  }
  
}