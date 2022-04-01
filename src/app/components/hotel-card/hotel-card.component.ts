import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SimpleModalService } from 'ngx-simple-modal';
import { ToastrService } from 'ngx-toastr';

import { IHotel } from '@lime-models/hotel.model';
import { BookingFormComponent } from '@lime-components/booking-form/booking-form.component';

@Component({
  selector: 'lime-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss'],
})
export class HotelCardComponent implements OnInit, OnDestroy {
  @Input() hotel: IHotel;

  subscriptions: Subscription[] = [];

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

    this.subscriptions.push(subscribe);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
