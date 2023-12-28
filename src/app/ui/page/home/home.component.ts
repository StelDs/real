import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

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

  public bayOverlayGroup: FormGroup = this.fb.group({
    buy: false,
    takeOff: false,
    dailyRent: false,
  });

  public districtsOverlayGroup: FormGroup = this.fb.group({
    newBuilding: false,
    secondary: false,
    room: false,
    Fraction: false,
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

  constructor(private fb: FormBuilder) {
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
}
