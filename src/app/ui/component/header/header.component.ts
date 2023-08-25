import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogComponent} from "../login-dialog/login-dialog.component";
import {RegistrationDialogComponent} from "../registration-dialog/registration-dialog.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
    cities: string[] = ['Воронеж', 'Москва', 'Липецк', 'Белгород']
    activeCity!: string

    constructor(private dialog: MatDialog) {
        this.setActivLocation(this.cities[0])
    }

    ngOnInit(): void {
    }

    public setActivLocation(city: string): void {
        this.activeCity = city
    }

    public routingOrLogin(href: string) {
        this.openLoginDialog();
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
