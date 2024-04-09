export interface ApartmentSearchDto {
  buy: BuyingTypeFilter,
  type_dwelling: HouseTypeFilter,
  rooms: RoomsFilter,
  price_min: number,
  price_max: number,
  search_txt: string
}

export interface BuyingTypeFilter {
  buy: boolean,
  rent: boolean,
  daily_rent: boolean
}

export interface HouseTypeFilter {
  new_building: boolean,
  secondary: boolean,
  house: boolean,
  cottage: boolean,
}

export interface RoomsFilter {
  atelier: boolean,
  room_1: boolean,
  room_2: boolean,
  room_3: boolean,
  room_4: boolean,
  room_plus: boolean,
}

export interface ApartmentSmartSearchDto {
  quantityRooms: number[] | null;
  isEuro: boolean[] | null;

  price: number[] | null;
  priceWeight: number;

  countOfApartmentsFerFloor: number[] | null;
  countOfApartmentsFerWeight: number;

  squarePrice: number[] | null;
  squarePriceWeight: number;

  square: number[] | null;
  squareWeight: number;

  residentialSquare: number[] | null;
  residentialSquareWeight: number;

  squareKitchen: number[] | null;
  squareKitchenWeight: number;

  floor: number[] | null;
  floorWeight: number;
  isLastFloor: boolean;
  isNotFirstFloor: boolean;
  isNotLastFloor: boolean;

  countFloor: number[] | null;
  countFloorWeight: number;

  apartmentType: string[] | null;
  apartmentTypeWeight: number;

  saleType: string[] | null;
  saleTypeWeight: number;

  repair: string[] | null;
  repairWeight: number;


  isBalcony: boolean | null;
  isInsulatedBalcony: boolean;
  isLoggia: boolean;
  balconyWeight: number;

  ceilingHeight: number[] | null;
  ceilingHeightWeight: number;

  houseType: string[] | null;
  houseTypeWeight: number;

  isSmartHome: boolean[] | null;
  isSmartHomeWeight: number;
}
