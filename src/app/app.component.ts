import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

import { HotelsService } from '@lime-services/hotels.service';
import { IHotel } from '@lime-models/hotel.model';
import { MARKER_ICON } from '@lime-models/location.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'lime-frontend';

  hotels: IHotel[] = [];
  markers: google.maps.MarkerOptions[] = [];
  isLoadingHotels: boolean;

  subscriptions: Subscription[] = [];

  constructor(private hotelsService: HotelsService) {}

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(): void {
    this.isLoadingHotels = true;
    const subscribe = this.hotelsService.getHotels().subscribe((res) => {
      this.hotels = res.items;
      this.getSetMarkers(this.hotels);

      this.isLoadingHotels = false;
    });

    this.subscriptions.push(subscribe);
  }

  getSetMarkers(hotels: IHotel[]): void {
    this.markers = hotels.map((item) => {
      const { title, position } = item;
      return {
        title,
        position,
        animation: google.maps.Animation.DROP,
        options: {
          draggable: false,
          icon: MARKER_ICON,
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
