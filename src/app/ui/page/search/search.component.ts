import {Component, DEFAULT_CURRENCY_CODE, OnInit} from '@angular/core';
import {Apartment} from "../../../core/model/apartment";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public cards: Apartment.ApartmentCard[] = DEFAULT_APARTMENT;

  public constructor() {
  }

  public ngOnInit(): void {
  }

}

let DEFAULT_APARTMENT: Apartment.ApartmentCard[] = [
  {
    preview: null,
    rooms: '2 комнаты',
    square: 78.7,
    residentialComplex: 'Новостройка, ЖК «Новый дом»',
    address: 'г. Воронеж, ул. Жилая, 9',
    info: {
      kitchen: 19,
      floor: 10,
      deadlineDelivery: '1 кв. 2023 г.',
    },
    price: 6076000,
    pricePerSquare: 77205,
    percent: 95,
    phone: '+79998645243',
    like: false,
    developer: 'ГК Звезда',
  },
  {
    preview: null,
    rooms: '2 комнаты',
    square: 78.7,
    residentialComplex: 'Новостройка, ЖК «Новый дом»',
    address: 'г. Воронеж, ул. Жилая, 9',
    info: {
      kitchen: 19,
      floor: 10,
      deadlineDelivery: '1 кв. 2023 г.',
    },
    price: 6076000,
    pricePerSquare: 77205,
    percent: 95,
    phone: '+79998645243',
    like: false,
    developer: 'ГК Звезда',
  },
  {
    preview: null,
    rooms: '2 комнаты',
    square: 78.7,
    residentialComplex: 'Новостройка, ЖК «Новый дом»',
    address: 'г. Воронеж, ул. Жилая, 9',
    info: {
      kitchen: 19,
      floor: 10,
      deadlineDelivery: '1 кв. 2023 г.',
    },
    price: 6076000,
    pricePerSquare: 77205,
    percent: 95,
    phone: '+79998645243',
    like: false,
    developer: 'ГК Звезда',
  },
  {
    preview: null,
    rooms: '2 комнаты',
    square: 78.7,
    residentialComplex: 'Новостройка, ЖК «Новый дом»',
    address: 'г. Воронеж, ул. Жилая, 9',
    info: {
      kitchen: 19,
      floor: 10,
      deadlineDelivery: '1 кв. 2023 г.',
    },
    price: 6076000,
    pricePerSquare: 77205,
    percent: 95,
    phone: '+79998645243',
    like: false,
    developer: 'ГК Звезда',
  },
  {
    preview: null,
    rooms: '2 комнаты',
    square: 78.7,
    residentialComplex: 'Новостройка, ЖК «Новый дом»',
    address: 'г. Воронеж, ул. Жилая, 9',
    info: {
      kitchen: 19,
      floor: 10,
      deadlineDelivery: '1 кв. 2023 г.',
    },
    price: 6076000,
    pricePerSquare: 77205,
    percent: 95,
    phone: '+79998645243',
    like: false,
    developer: 'ГК Звезда',
  },
  {
    preview: null,
    rooms: '2 комнаты',
    square: 78.7,
    residentialComplex: 'Новостройка, ЖК «Новый дом»',
    address: 'г. Воронеж, ул. Жилая, 9',
    info: {
      kitchen: 19,
      floor: 10,
      deadlineDelivery: '1 кв. 2023 г.',
    },
    price: 6076000,
    pricePerSquare: 77205,
    percent: 95,
    phone: '+79998645243',
    like: false,
    developer: 'ГК Звезда',
  },
]
