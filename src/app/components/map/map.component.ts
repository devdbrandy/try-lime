import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { GoogleMap, MapMarker } from '@angular/google-maps';

import { SliderService } from '@lime-services/slider.service';
import {
  ACTIVE_MARKER_ICON,
  MARKER_ICON,
  MUNICH_COORDINATES,
} from '@lime-models/location.model';

@Component({
  selector: 'lime-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  options: google.maps.MapOptions = {
    zoom: 15,
    disableDefaultUI: true,
  };
  center: google.maps.LatLngLiteral = MUNICH_COORDINATES;
  selectedMaker: MapMarker;

  @Input() markers: google.maps.MarkerOptions[] = [];

  @ViewChild(GoogleMap) map: GoogleMap;
  @ViewChildren(MapMarker) mapMarkers!: QueryList<MapMarker>;

  constructor(private sliderService: SliderService) {}

  ngOnInit(): void {
    this.activeMarkerSub();
  }

  ngAfterViewInit(): void {
    const bounds = this.getBounds(this.markers);
    this.map.googleMap.fitBounds(bounds);
    this.selectAndPanToMarkerByIndex(0);
  }

  getBounds(markers: any[]): any {
    let north;
    let south;
    let east;
    let west;

    markers.forEach((marker) => {
      // set the coordinates to marker's lat and lng on the first run.
      // if the coordinates exist, get max or min depends on the coordinates.
      north =
        north !== undefined
          ? Math.max(north, marker.position.lat)
          : marker.position.lat;
      south =
        south !== undefined
          ? Math.min(south, marker.position.lat)
          : marker.position.lat;
      east =
        east !== undefined
          ? Math.max(east, marker.position.lng)
          : marker.position.lng;
      west =
        west !== undefined
          ? Math.min(west, marker.position.lng)
          : marker.position.lng;
    });

    const bounds = { north, south, east, west };

    return bounds;
  }

  activeMarkerSub(): void {
    this.sliderService.activeMarker$.subscribe((markerIndex) => {
      this.selectAndPanToMarkerByIndex(markerIndex);
    });
  }

  selectAndPanToMarkerByIndex(markerIndex: number): void {
    const marker = this.mapMarkers.find((_, i) => i === markerIndex);

    this.panTo(marker);
    this.map.panTo(marker.marker.getPosition());
  }

  handleMarkerClick(marker: MapMarker, slideIndex: number): void {
    this.panTo(marker);
    this.sliderService.slideTo(slideIndex);
  }

  panTo(marker: MapMarker): void {
    if (this.selectedMaker) {
      this.selectedMaker.marker.setIcon(MARKER_ICON);
    }

    marker.marker.setIcon(ACTIVE_MARKER_ICON);
    this.selectedMaker = marker;
  }
}
