import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreeDPortfolioComponent } from './three-d-portfolio/three-d-portfolio.component';
import { HeaderComponent } from './header/header.component';
import { ComputersComponent } from './computers/computers.component';
import { AboutComponent } from './about/about.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { AnimationsComponent } from './animations/animations.component';
import { ContactComponent } from './contact/contact.component';
import { EarthCanvasComponent } from './earth-canvas/earth-canvas.component';
import { RotatingBallsComponent } from './rotating-balls/rotating-balls.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeDPortfolioComponent,
    HeaderComponent,
    ComputersComponent,
    AboutComponent,
    ServiceCardComponent,
    AnimationsComponent,
    ContactComponent,
    EarthCanvasComponent,
    RotatingBallsComponent,
    WorkComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
