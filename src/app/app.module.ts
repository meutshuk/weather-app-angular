import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaceDescriptionComponent } from './place-description/place-description.component';
import { WeatherDescriptionComponent } from './weather-description/weather-description.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartistModule } from 'ng-chartist';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlaceDescriptionComponent,
    WeatherDescriptionComponent,
    WeatherDetailsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartistModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
