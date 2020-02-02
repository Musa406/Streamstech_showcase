import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { TechnologyStackComponent } from './technology-stack/technology-stack.component';
import { GisService } from './services/gis.service';
import { MEService } from './services/m-e.service';
import { WebAppService } from './services/web-app.service';
import { MobileAppService } from './services/mobile-app.service';
import { BiService } from './services/bi.service';
import { ConsultancyService } from './services/consultancy.service';

// import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    TechnologyStackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Ng2CarouselamosModule,
    RecaptchaModule.forRoot()

  ],
  providers: [GisService, MEService, WebAppService, MobileAppService, BiService, ConsultancyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
