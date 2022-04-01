import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IHotel } from '@lime-models/hotel.model';

export interface PromptModel {
  hotel: IHotel;
}

@Component({
  selector: 'lime-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent
  extends SimpleModalComponent<PromptModel, boolean>
  implements OnInit {
  hotel: IHotel;
  isSubmitting: boolean;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
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
