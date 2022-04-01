import { Component, Input, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { ToastrService } from 'ngx-toastr';

import { IHotel } from '../../models/hotel.model';
import { BookingFormComponent } from '../booking-form/booking-form.component';

@Component({
  selector: 'lime-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss'],
})
export class HotelCardComponent implements OnInit {
  @Input() hotel: IHotel;

  constructor(
    private simpleModalService: SimpleModalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  openBookingForm(): void {
    const subscribe = this.simpleModalService
      .addModal(BookingFormComponent, {
        hotel: this.hotel,
      })
      .subscribe((result) => {
        if (result) {
          this.toastr.success('Successfully Confirmed!', 'Booking');
        }
      });
  }
}
