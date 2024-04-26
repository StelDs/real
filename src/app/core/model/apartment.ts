export interface ApartmentShortCard {
  id: string;
  price: number;
  squarePrice: number;
  quantityRooms: number;
  address: string;
  entrance: number;
  apartmentNumber: number;
  floor: number;
  square: number;
  squareKitchen: number;
  squareKitchenLivingRoom: number;
  like: boolean;
  percent: number;
  picHrefs: string;
}

export interface PhoneData {
  phone: string;
  name: string;
}

export interface ApartmentFullCard {
  id: string;
  preview: File[];
  quantityRooms: number;
  square: number;
  residentialComplex: string;
  address: string;
  kitchen: number;
  floor: number;
  squareKitchen: number;
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
  picHrefs: string;
}
