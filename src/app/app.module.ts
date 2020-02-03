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
import { SectionsComponent } from './sections/sections.component';


import { TechnologyStackComponent } from './technology-stack/technology-stack.component';
import { SectionsService } from './services/sections.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    SectionsComponent,
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
    RecaptchaModule.forRoot()

  ],
  providers: [SectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
