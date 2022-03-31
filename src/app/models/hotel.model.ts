import { ILatLng } from './location.model';

export interface IHotel {
  title: string;
  address: IAddress;
  position: ILatLng;
  distance: number;
}

export interface IAddress {
  label: string;
  countryCode: string;
  countryName: string;
  stateCode: string;
  state: string;
  countyCode: string;
  county: string;
  city: string;
  district: string;
  street: string;
  postalCode: string;
  houseNumber: string;
}
