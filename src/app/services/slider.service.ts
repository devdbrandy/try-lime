import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  private slideToState = new Subject<number>();
  slideTo$ = this.slideToState.asObservable();

  private activeMarkerState = new Subject<number>();
  activeMarker$ = this.activeMarkerState.asObservable();

  slideTo(slideIndex: number): void {
    this.slideToState.next(slideIndex);
  }

  setActiveMarker(markerIndex): void {
    this.activeMarkerState.next(markerIndex);
  }
}
