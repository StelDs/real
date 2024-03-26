import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-default-search',
  templateUrl: './default-search.component.html',
  styleUrls: ['./default-search.component.css']
})
export class DefaultSearchComponent implements OnInit {
  public byToggleValue: string[] =[]
  public roomsToggleValue: string[] =[]

  constructor() { }

  ngOnInit(): void {
  }

  public roomsToggleContain(value: string): boolean {
    return !this.roomsToggleValue.includes(value);
  }

  public restore(): void {
    window.location.reload();
  }
}
