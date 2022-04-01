import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { SimpleModalModule } from 'ngx-simple-modal';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HotelSliderComponent } from './components/hotel-slider/hotel-slider.component';
import { MapComponent } from './components/map/map.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelSliderComponent,
    MapComponent,
    HotelCardComponent,
    BookingFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    GoogleMapsModule,
    SimpleModalModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
