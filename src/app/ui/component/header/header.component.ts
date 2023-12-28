import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogComponent} from "../login-dialog/login-dialog.component";
import {RegistrationDialogComponent} from "../registration-dialog/registration-dialog.component";
import {AuthService} from "../../../core/auth/auth-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  cities: string[] = ['Воронеж', 'Москва', 'Липецк', 'Белгород']
  activeCity!: string

  constructor(private readonly authService: AuthService,
              private readonly router: Router,
              private readonly dialog: MatDialog) {
    this.setActivLocation(this.cities[0])
  }

  ngOnInit(): void {
  }

  public setActivLocation(city: string): void {
    this.activeCity = city
  }

  public routingOrLogin(location: string): void {
    if (!this.authService.isAuthorized())
      this.openLoginDialog();
    else
      switch (location) {
        case 'place-ad':
          sessionStorage.setItem('profileTab', '3');
          this.router.navigate(['not-found'], { skipLocationChange: true })
            .then(() => this.router.navigate(['profile']));
          break;
        case 'profile':
          sessionStorage.setItem('profileTab', '0');
          this.router.navigate(['not-found'], { skipLocationChange: true })
            .then(() => this.router.navigate(['profile']));
          break;
        default:
          this.router.navigate(['not-found'], { skipLocationChange: true }).then();
      }
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
