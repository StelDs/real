import {Component, Inject, Input, OnInit, Renderer2} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PhoneDialogComponent} from "../search/ui/component/phone-dialog/phone-dialog.component";
import {ApartmentFullCard, ApartmentShortCard} from "../../../core/model/apartment";
import {ActivatedRoute} from "@angular/router";
import {ApartmentService} from "../../../core/service/apartment-service";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
  slides = [{img: 'assets/tests/t1.png'}];

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
      }
    );

    this.apartmentService.getApartment(this.uid).subscribe({
      next: (data: any): void => {

        // this.test();
        this.apartment = data;

        console.log(this.apartment);


      }
    })
    const scr = this.render2.createElement('script');
    scr.type = 'text/javascript';
    scr.text = 'console.log("test");';
    this.render2.appendChild(this.document.body, scr);

  }

  addSlide() {
    //  this.slides.push({img: 'assets/tests/t2.png'})
    this.slides = [{img: 'assets/tests/t2.png'}];
  }


  test() {
    const carouselIndicators = document.getElementsByClassName("carousel-indicators ng-star-inserted")[0] as HTMLElement;
    carouselIndicators.style.left = "35%";
    this.addSlide()
    // this.slides = [{image:'assets/tests/t2.png'},{image:'assets/tests/t1.png'},{image:'assets/tests/t1.png'}];
  }

  public showPhone(): void {
    this.dialog.open(PhoneDialogComponent, {
      data: {
        phone: "this.apartment.phone",
        name: "this.apartment.name",
      },
    });

  }

  public showPic(e: MouseEvent): void {
    this.dialog.open(PhoneDialogComponent, {
      data: {
        phone: e.target,
        name: "this.apartment.name",
      },
    });
  }
}
