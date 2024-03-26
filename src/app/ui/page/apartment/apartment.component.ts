import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PhoneDialogComponent} from "../search/ui/component/phone-dialog/phone-dialog.component";
import {ApartmentShortCard} from "../../../core/model/apartment";

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
  public slides: string[] = ['1', '2', '3'];
  public apartment!: ApartmentShortCard

  public changeLike(): void {
    this.apartment.like = !this.apartment.like;
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public showPhone(): void {
    this.dialog.open(PhoneDialogComponent, {
      data: {
        phone: "this.apartment.phone",
        name: "this.apartment.name",
      },
    });

  }

}
