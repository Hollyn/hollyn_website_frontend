import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeButtonComponent } from './components/home/items/resume-button/resume-button.component';
import { AboutMeComponent } from './components/home/sections/about-me/about-me.component';
import { ContactMeComponent } from './components/home/sections/contact-me/contact-me.component';
import { HeroBoxComponent } from './components/home/sections/hero-box/hero-box.component';
import { PortfolioComponent } from './components/home/sections/portfolio/portfolio.component';
import { TimelineComponent } from './components/home/sections/timeline/timeline.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    TimelineComponent,
    PortfolioComponent,
    ResumeButtonComponent,
    HeroBoxComponent,
    ContactMeComponent,
    AboutMeComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
