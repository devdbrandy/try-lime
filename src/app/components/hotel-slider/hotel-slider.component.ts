import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { SliderService } from '../../services/slider.service';
import { IHotel } from '../../models/hotel.model';
import Swiper from 'swiper';

@Component({
  selector: 'lime-hotel-slider',
  templateUrl: './hotel-slider.component.html',
  styleUrls: ['./hotel-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HotelSliderComponent implements OnInit {
  @Input() hotels: IHotel[] = [];
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor(private sliderService: SliderService) {}

  ngOnInit(): void {
    this.sliderService.slideTo$.subscribe((slideIndex) =>
      this.slideTo(slideIndex)
    );
  }

  slideTo(index: number): void {
    this.swiper.swiperRef?.slideTo(index);
  }

  onSlideChange(swiper: Swiper): void {
    this.sliderService.setActiveMarker(swiper.activeIndex);
  }
}
