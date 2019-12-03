import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderComponent } from './slider/slider.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SectionComponent } from './section/section.component';
import { ItemsSectionComponent } from './items-section/items-section.component';
import { FooterObservDirective } from './footer-observ.directive';
import { LoadObservDirective } from './load-observ.directive';
import { RouterModule }from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RayonsComponent } from './rayons/rayons.component';
import { SideNavFilterComponent } from './side-nav-filter/side-nav-filter.component';
import { SectionRayonsComponent } from './section-rayons/section-rayons.component';
import { RayonItemsSectionComponent } from './rayon-items-section/rayon-items-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderComponent,
    SidenavComponent,
    SectionComponent,
    ItemsSectionComponent,
    FooterObservDirective,
    LoadObservDirective,
    LandingPageComponent,
    RayonsComponent,
    SideNavFilterComponent,
    SectionRayonsComponent,
    RayonItemsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path:'' , component: LandingPageComponent},
      { path:'Rayons/:Rayon/:SousRayon' , component: RayonsComponent},
      { path:'Rayons/:Rayon' , component: RayonsComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
