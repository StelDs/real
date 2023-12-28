import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-smart-selection',
  templateUrl: './smart-selection.component.html',
  styleUrls: ['./smart-selection.component.css']
})
export class SmartSelectionComponent implements OnInit {
  public byToggleValue: string[] =[]
  public roomsToggleValue: string[] =[]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  print() {
    console.log(this.roomsToggleValue)
  }

  public roomsToggleContain(value: string): boolean {
    return !this.roomsToggleValue.includes(value);
  }

  public restore(): void {
    window.location.reload();
  }
}
