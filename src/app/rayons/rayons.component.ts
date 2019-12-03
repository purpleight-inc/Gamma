import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rayons',
  templateUrl: './rayons.component.html',
  styleUrls: ['./rayons.component.scss']
})
export class RayonsComponent implements OnInit {

  Rayon :string;
  SousRayon :string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params =>{
        this.Rayon = params.get('Rayon');
        this.SousRayon =params.get('SousRayon');
      });
  }

  public getRayon(){
    return this.Rayon
  }
  public getSousRayon(){
    return this.SousRayon
  }

}
