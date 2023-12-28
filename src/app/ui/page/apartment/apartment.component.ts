import {Component, Input, OnInit} from '@angular/core';
import {Apartment} from "../../../core/model/apartment";
import {MatDialog} from "@angular/material/dialog";
import {PhoneDialogComponent} from "../search/ui/component/phone-dialog/phone-dialog.component";

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
  public slides: string[] = ['1', '2', '3'];
  public apartment: Apartment.ApartmentCard = {
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
    like: true,
    developer: 'ГК Звезда',
  };

  public changeLike(): void {
    this.apartment.like = !this.apartment.like;
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public showPhone(): void {
    this.dialog.open(PhoneDialogComponent, {
      data: {
        phone: this.apartment.phone,
      },
    });

  }

}
