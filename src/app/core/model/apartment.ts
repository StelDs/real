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
