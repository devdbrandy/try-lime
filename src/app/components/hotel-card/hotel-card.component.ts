import { Component, Input, OnInit } from '@angular/core';
import { IHotel } from '../../models/hotel.model';

@Component({
  selector: 'lime-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss'],
})
export class HotelCardComponent implements OnInit {
  @Input() hotel: IHotel;

  constructor() {}

  ngOnInit(): void {}
}
