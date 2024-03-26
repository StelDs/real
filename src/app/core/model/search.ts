export interface ApartmentSearchDto {
  buy: BuyingTypeFilter,
  type_dwelling: HouseTypeFilter,
  rooms: RoomsFilter,
  price_min: number,
  price_max: number,
  search_txt: String
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

