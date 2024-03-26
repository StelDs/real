import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {PhoneData} from "../../../../../../core/model/apartment";

@Component({
  selector: 'app-phone-dialog',
  templateUrl: './phone-dialog.component.html',
  styleUrls: ['./phone-dialog.component.css']
})
export class PhoneDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: PhoneData) { }

  ngOnInit(): void {
  }

}
