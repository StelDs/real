import {Component, Inject, Input, NgModule, OnInit, Renderer2} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PhoneDialogComponent} from "../search/ui/component/phone-dialog/phone-dialog.component";
import {ApartmentFullCard} from "../../../core/model/apartment";
import {ActivatedRoute} from "@angular/router";
import {ApartmentService} from "../../../core/service/apartment-service";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css'],
})

export class ApartmentComponent implements OnInit {
  slides = [];


  public apartment: ApartmentFullCard = new class implements ApartmentFullCard {
    address: string = "";
    ceiling_height: string = "";
    deadlineDelivery: string = "";
    developer: string = "";
    floor!: number;
    house_type: string = "";
    id: string = "";
    kitchen!: number;
    like: boolean = false;
    parking: string = "";
    percent!: number;
    phone: string = "";
    picHrefs: string = "";
    preview!: File[];
    price!: number;
    pricePerSquare!: number;
    residentialComplex: string = "";
    quantityRooms!: number;
    square!: number;
    squareKitchen!: number;
  }

  public uid !: string;


  public changeLike(): void {
    this.apartment.like = !this.apartment.like;
  }

  constructor(private readonly activatedRoute: ActivatedRoute,
              public dialog: MatDialog,
              @Inject(DOCUMENT) private document: Document,
              private readonly apartmentService: ApartmentService, private render2: Renderer2) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.uid = params['uid']
        this.slides = params['countPic']
      }
    );

    this.apartmentService.getApartment(this.uid).subscribe({
      next: (data: any): void => {
        this.correctStyleIndicators();
        this.apartment = data;

        this.apartment.pricePerSquare = this.apartment.price / this.apartment.square;
      }
    })

    const scr = this.render2.createElement('script');
    scr.type = 'text/javascript';
  //  scr.text = 'console.log("test");';
    this.render2.appendChild(this.document.body, scr);

  }

  correctStyleIndicators() {
    const carouselIndicators = document.getElementsByClassName("carousel-indicators ng-star-inserted")[0] as HTMLElement;
    carouselIndicators.style.left = "35%";
  }

  public showPhone(): void {
    this.dialog.open(PhoneDialogComponent, {
      data: {
        phone: "this.apartment.phone",
        name: "this.apartment.name",
      },
    });

  }

  public showPic(imagepath:any): void {
    window.open(imagepath, "_blank");
  //  return this.http.get(imagepath);
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
}
