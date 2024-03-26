import {Component, OnInit} from '@angular/core';
import {ApartmentShortCard} from "../../../core/model/apartment";
import {ActivatedRoute, Router} from "@angular/router";
import {ApartmentSearchDto} from "../../../core/model/search";
import {ApartmentService} from "../../../core/service/apartment-service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public cards?: ApartmentShortCard[];
  public totalPages!: number;
  public totalElements!: number;
  public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  public size: number = 10;
  public page: number = 0;


  public constructor(private readonly activatedRoute: ActivatedRoute,
                     private readonly router: Router,
                     private readonly apartmentService: ApartmentService) {
  }

  public ngOnInit(): void {
    this.loadPage();
  }

  public loadPage(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const searchDto: ApartmentSearchDto = {
        buy: {
          buy: params['bay_buy'],
          rent: params['bay_takeOff'],
          daily_rent: params['bay_dailyRent']
        },
        type_dwelling: {
          new_building: params['districts_newBuilding'],
          secondary: params['districts_secondary'],
          house: params['districts_house'],
          cottage: params['districts_countryHouse']
        },
        rooms: {
          atelier: params['rooms_atelier'],
          room_1: params['rooms_room_1'],
          room_2: params['rooms_room_2'],
          room_3: params['rooms_room_3'],
          room_4: params['rooms_room_4'],
          room_plus: params['rooms_room_4_plus']
        },
        price_min: params['price_min'],
        price_max: params['price_max'],
        search_txt: params['text']
      };
      this.apartmentService.search(searchDto, this.size, this.page).subscribe({
        next: (data: any): void => {
          this.cards = data?.content
          this.totalPages = data?.totalPages
          this.totalElements = data?.totalElements
        }
      })
    });
  }

  handlePageEvent($event: PageEvent): void {
    this.size = $event.pageSize;
    this.page = $event.pageIndex;
    this.loadPage();
    window.scroll(0, 0)
    console.log(this.size)
    console.log(this.page)
  }
}
