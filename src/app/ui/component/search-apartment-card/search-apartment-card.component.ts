import {Component, Input, OnInit} from '@angular/core';
import {Apartment} from "../../../core/model/apartment";
import {PhoneDialogComponent} from "../../page/search/ui/component/phone-dialog/phone-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-search-apartment-card',
  templateUrl: './search-apartment-card.component.html',
  styleUrls: ['./search-apartment-card.component.css']
})
export class SearchApartmentCardComponent implements OnInit {
  @Input() public apartment!: Apartment.ApartmentCard;

  constructor(public readonly dialog: MatDialog) {
  }

  public ngOnInit(): void {
  }

  public changeLike(): void {
    this.apartment.like = !this.apartment.like;
  }

  public showPhone(): void {
    this.dialog.open(PhoneDialogComponent, {
      data: {
        phone: this.apartment.phone,
      },
    });
  }
}
