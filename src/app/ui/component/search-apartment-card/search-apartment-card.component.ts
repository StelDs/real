import {Component, Input, OnInit} from '@angular/core';
import {PhoneDialogComponent} from "../../page/search/ui/component/phone-dialog/phone-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ApartmentShortCard} from "../../../core/model/apartment";
import {AuthService} from "../../../core/auth/auth-service";
import {LoginDialogComponent} from "../login-dialog/login-dialog.component";
import {RegistrationDialogComponent} from "../registration-dialog/registration-dialog.component";

@Component({
  selector: 'app-search-apartment-card',
  templateUrl: './search-apartment-card.component.html',
  styleUrls: ['./search-apartment-card.component.css']
})
export class SearchApartmentCardComponent implements OnInit {
  @Input() public apartment!: ApartmentShortCard;

  constructor(public readonly dialog: MatDialog,
              public readonly authService: AuthService) {
  }

  public ngOnInit(): void {
  }

  public changeLike(): void {
    if (this.authService.isAuthorized())
      this.apartment.like = !this.apartment.like;
    else
      this.openLoginDialog();
  }

  public showPhone(): void {
    console.log(this.apartment)
    this.dialog.open(PhoneDialogComponent, {
      data: {
        phone: "+79999999999",
        name: "Ivan Ivanov"
      },
    });
  }

  public ifNullPic(pic: string): string {
    if (pic === null) {
      return " /assets/tests/t1.png"
    }
    return pic.split('\n')[0];
  }

  countPic(pic: string): any {
    let str = pic.split('\n');
    let cnt = [];
    let i = 0;
    for (const strKey in str) {
      cnt.push(i);
      i++;
    }
    return cnt;
  }

  public formatNumber(n: number): string {
    if (n < 0) {
      throw 'must be non-negative: ' + n;
    }
    if (n === 0) {
      return '0';
    }

    let output = [];

    for (; n >= 1000; n = Math.floor(n / 1000)) {
      output.unshift(String(n % 1000).padStart(3, '0'));
    }
    output.unshift(n);

    return output.join(' ');
  }

  private openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.openRegistrationDialog();
    })
  }

  private openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(RegistrationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.openLoginDialog();
    })
  }
}
