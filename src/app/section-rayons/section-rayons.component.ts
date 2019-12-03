import { Component, OnInit, Input } from '@angular/core';
import { RayonsComponent } from '../rayons/rayons.component';

@Component({
  selector: 'app-section-rayons',
  templateUrl: './section-rayons.component.html',
  styleUrls: ['./section-rayons.component.scss']
})
export class SectionRayonsComponent implements OnInit {

  @Input() Rayon :string;
  @Input() SousRayon :string;

  ImgRayon : {Rayon: string, Img: string}[];

  constructor() { 
    this.ImgRayon = [
      {
        Rayon :"Meat & Fish",
        Img : "../../assets/images/section/meat&fish.jpg"
      },
      {
        Rayon :"Boissons",
        Img : "../../assets/images/section/boisson3.jpg"
      },
      {
        Rayon :"Entretien & Nettoyage",
        Img : "../../assets/images/section/entretien6.jpg"
      },
      {
        Rayon :"Fruit & Legumes",
        Img : "../../assets/images/section/salée3.jpg"
      },
      {
        Rayon :"Epicerie Sucrée, Boulangerie",
        Img : "../../assets/images/section/sucree3.jpg"
      },
      {
        Rayon :"Epicerie Salée",
        Img : "../../assets/images/section/salée2.jpg"
      },
      {
        Rayon :"Surgelés",
        Img : "../../assets/images/section/surgele6.jpg"
      },
      {
        Rayon :"Fromagerie et Créme",
        Img : "../../assets/images/section/fromage4.jpg"
      }
    ];
  }

  ngOnInit() {
    
  }

  findImg(Rayon: string){
    let i = this.ImgRayon.findIndex(element =>  element.Rayon == Rayon);
    return this.ImgRayon[i].Img;
  }

}
