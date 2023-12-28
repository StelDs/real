export namespace Apartment {
  export interface ApartmentCard {
    preview: File | null;
    rooms: string;
    square: number;
    residentialComplex: string;
    address: string;
    info: ApartmentSmallInfo;
    price: number;
    pricePerSquare: number;
    percent: number;
    phone: string;
    like: boolean;
    developer: string;
  }

  export interface ApartmentSmallInfo {
    kitchen: number
    floor: number
    deadlineDelivery: string
  }

  export interface PhoneData {
    phone: string;
    name: string;
  }

  export interface ApartmentCardFull {
    preview: File[];
    rooms: string;
    square: number;
    residentialComplex: string;
    address: string;
    kitchen: number;
    floor: number;
    deadlineDelivery: string;
    ceiling_height: string;
    parking: string;
    house_type: string;
    price: number;
    pricePerSquare: number;
    percent: number;
    phone: string;
    like: boolean;
    developer: string;
  }
}
