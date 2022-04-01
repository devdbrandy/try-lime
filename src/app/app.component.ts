import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { hotelsAPIData } from './hotels.data';
import { IHotel } from './models/hotel.model';
import { MARKER_ICON } from './models/location.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'lime-frontend';

  hotels: IHotel[] = [];
  markers: google.maps.MarkerOptions[] = [];

  constructor() {}

  ngOnInit(): void {
    this.hotels = hotelsAPIData.items;
    this.markers = hotelsAPIData.items.map((item) => {
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
}
