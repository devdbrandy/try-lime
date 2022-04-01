import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

import { IHotel } from '@lime-models/hotel.model';

export interface PromptModel {
  hotel: IHotel;
}

@Component({
  selector: 'lime-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent extends SimpleModalComponent<
  PromptModel,
  boolean
> {
  isSubmitting: boolean;

  constructor() {
    super();
  }

  submit(): void {
    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
      this.result = true;
      this.close();
    }, 1000);
  }
}
