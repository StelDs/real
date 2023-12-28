import {Component, OnInit} from '@angular/core';
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public selectedTab: number = 0;

  constructor() {
  }

  public ngOnInit(): void {
    if (sessionStorage.getItem('profileTab') != null)
      this.selectedTab = Number(sessionStorage.getItem('profileTab'))
    else
      sessionStorage.setItem('profileTab', this.selectedTab.toString());
  }

  onTabChanged($event: MatTabChangeEvent): void {
    this.selectedTab = $event.index;
    sessionStorage.setItem('profileTab', this.selectedTab.toString());
  }
}
