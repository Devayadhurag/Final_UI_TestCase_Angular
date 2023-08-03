import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopbarComponent } from './components/organism/topbar/topbar.component';
import { NavbarComponent } from './components/organism/navbar/navbar.component';
import { CarouselComponent } from './components/organism/carousel/carousel.component';
import { CarouselBackgroundComponent } from './components/molecule/carousel-background/carousel-background.component';
import { CarouselTextComponent } from './components/molecule/carousel-text/carousel-text.component';
import { Section1Component } from './components/organism/section1/section1.component';
import { Section1Part1Component } from './components/molecule/section1-part1/section1-part1.component';
import { Section1Part2Component } from './components/molecule/section1-part2/section1-part2.component';
import { Section1ButtonComponent } from './components/atom/section1-button/section1-button.component';
import { Section1FolderComponent } from './components/atom/section1-folder/section1-folder.component';
import { Section2Component } from './components/organism/section2/section2.component';
import { Section2Part1Component } from './components/molecule/section2-part1/section2-part1.component';
import { Section2Part2Component } from './components/molecule/section2-part2/section2-part2.component';
import { Section3Component } from './components/organism/section3/section3.component';
import { Section3TitleComponent } from './components/molecule/section3-title/section3-title.component';
import { Section3ContainerComponent } from './components/molecule/section3-container/section3-container.component';
import { Section3ImgComponent } from './components/atom/section3-img/section3-img.component';
import { Section4Component } from './components/organism/section4/section4.component';
import { Section4HeadComponent } from './components/molecule/section4-head/section4-head.component';
import { Section4ContainerComponent } from './components/molecule/section4-container/section4-container.component';
import { DemoComponent } from './components/organism/demo/demo.component';
import { DemoRequestComponent } from './components/molecule/demo-request/demo-request.component';
import { DemoTextComponent } from './components/molecule/demo-text/demo-text.component';
import { FooterComponent } from './components/organism/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    CarouselComponent,
    CarouselBackgroundComponent,
    CarouselTextComponent,
    Section1Component,
    Section1Part1Component,
    Section1Part2Component,
    Section1ButtonComponent,
    Section1FolderComponent,
    Section2Component,
    Section2Part1Component,
    Section2Part2Component,
    Section3Component,
    Section3TitleComponent,
    Section3ContainerComponent,
    Section3ImgComponent,
    Section4Component,
    Section4HeadComponent,
    Section4ContainerComponent,
    DemoComponent,
    DemoRequestComponent,
    DemoTextComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
