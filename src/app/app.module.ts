import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderComponent } from './slider/slider.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SectionComponent } from './section/section.component';
import { ItemsSectionComponent } from './items-section/items-section.component';
import { FooterObservDirective } from './footer-observ.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderComponent,
    SidenavComponent,
    SectionComponent,
    ItemsSectionComponent,
    FooterObservDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
