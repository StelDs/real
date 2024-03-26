import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public buyOverlayIsOpen: boolean = false;
  public districtsOverlayIsOpen: boolean = false;
  public roomsOverlayIsOpen: boolean = false;
  public priceOverlayIsOpen: boolean = false;
  public searchText: string = ''

  public bayOverlayGroup: FormGroup = this.fb.group({
    buy: false,
    takeOff: false,
    dailyRent: false,
  });

  public districtsOverlayGroup: FormGroup = this.fb.group({
    newBuilding: false,
    secondary: false,
    room: false,
    fraction: false,
    house: false,
    countryHouse: false,
    region: false,
    garage: false,
  });

  public roomsOverlayGroup: FormGroup = this.fb.group({
    room_1: false,
    room_2: false,
    room_3: false,
    room_4: false,
    room_4_plus: false,
    atelier: false,
  });

  public priceOverlayGroup: FormGroup = this.fb.group({
    min: null,
    max: null,
  });

  constructor(private readonly fb: FormBuilder,
              private readonly router: Router) {
  }

  public ngOnInit(): void {
  }

  public setClose(): void {
    this.buyOverlayIsOpen = false;
    this.districtsOverlayIsOpen = false;
    this.roomsOverlayIsOpen = false;
    this.priceOverlayIsOpen = false;
    this.checkMinMax();
  }

  public setCloseKeydown(event: KeyboardEvent): void {
    if (event.code === 'Escape') {
      this.buyOverlayIsOpen = false;
      this.districtsOverlayIsOpen = false;
      this.roomsOverlayIsOpen = false;
      this.priceOverlayIsOpen = false;
      this.checkMinMax();
    }
  }

  public checkMinMax(): void {
    if (this.priceOverlayGroup.controls['max'].value < 0) {
      let newMax: number = this.priceOverlayGroup.controls['max'].value * -1
      let oldMin: number = this.priceOverlayGroup.controls['min'].value
      this.priceOverlayGroup.setValue({
        max: newMax,
        min: oldMin,
      });
    }
    if (this.priceOverlayGroup.controls['min'].value < 0) {
      let newMin: number = this.priceOverlayGroup.controls['min'].value * -1
      let oldMax: number = this.priceOverlayGroup.controls['max'].value
      this.priceOverlayGroup.setValue({
        min: newMin,
        max: oldMax,
      });
    }
    if (this.priceOverlayGroup.controls['max'].value < this.priceOverlayGroup.controls['min'].value) {
      let newMax: number = this.priceOverlayGroup.controls['min'].value
      let newMin: number = this.priceOverlayGroup.controls['max'].value
      this.priceOverlayGroup.setValue({
        max: newMax,
        min: newMin
      });
    }
  }

  public search(): void{
    this.router.navigate(['search'],{
      queryParams: {
        text: this.searchText,
        price_min: this.priceOverlayGroup.controls['min'].value,
        price_max: this.priceOverlayGroup.controls['max'].value,
        bay_buy: this.bayOverlayGroup.controls['buy'].value,
        bay_takeOff: this.bayOverlayGroup.controls['takeOff'].value,
        bay_dailyRent: this.bayOverlayGroup.controls['dailyRent'].value,
        districts_newBuilding: this.districtsOverlayGroup.controls['newBuilding'].value,
        districts_secondary: this.districtsOverlayGroup.controls['secondary'].value,
        districts_room: this.districtsOverlayGroup.controls['room'].value,
        districts_fraction: this.districtsOverlayGroup.controls['fraction'].value,
        districts_house: this.districtsOverlayGroup.controls['house'].value,
        districts_countryHouse: this.districtsOverlayGroup.controls['countryHouse'].value,
        districts_region: this.districtsOverlayGroup.controls['region'].value,
        districts_garage: this.districtsOverlayGroup.controls['garage'].value,
        rooms_room_1: this.roomsOverlayGroup.controls['room_1'].value,
        rooms_room_2: this.roomsOverlayGroup.controls['room_2'].value,
        rooms_room_3: this.roomsOverlayGroup.controls['room_3'].value,
        rooms_room_4: this.roomsOverlayGroup.controls['room_4'].value,
        rooms_room_4_plus: this.roomsOverlayGroup.controls['room_4_plus'].value,
        rooms_atelier: this.roomsOverlayGroup.controls['atelier'].value
      }
    })
  }
}
