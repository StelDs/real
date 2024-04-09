import {Component, OnInit} from '@angular/core';
import {ApartmentSmartSearchDto} from "../../../core/model/search";

@Component({
  selector: 'app-smart-selection',
  templateUrl: './smart-selection.component.html',
  styleUrls: ['./smart-selection.component.css']
})
export class SmartSelectionComponent implements OnInit {
  public toSearch?: ApartmentSmartSearchDto;

  public isAtelier: boolean = false;
  public isOne: boolean = false;
  public isTwo: boolean = false;
  public isThree: boolean = false;
  public isFour: boolean = false;
  public isFreeLayout: boolean = false;
  public isFivePlus: boolean = false;
  public isOneEuro: boolean = false;
  public isTwoEuro: boolean = false;
  public isThreeEuro: boolean = false;

  public priceMin!: number;
  public pricePreference!: number;
  public priceMax!: number;
  public priceWeight!: number;


  public countOfApartmentsFerFloorMin!: number;
  public countOfApartmentsFerFloorPreference!: number;
  public countOfApartmentsFerFloorMax!: number;
  public countOfApartmentsFerFloorWeight!: number;

  public squarePriceMin!: number;
  public squarePricePreference!: number;
  public squarePriceMax!: number;
  public squarePriceWeight!: number;

  public squareMin!: number;
  public squarePreference!: number;
  public squareMax!: number;
  public squareWeight!: number;

  public residentialSquareMin!: number;
  public residentialSquarePreference!: number;
  public residentialSquareMax!: number;
  public residentialSquareWeight!: number;

  public squareKitchenMin!: number;
  public squareKitchenPreference!: number;
  public squareKitchenMax!: number;
  public squareKitchenWeight!: number;

  public floorMin!: number;
  public floorPreference!: number;
  public floorMax!: number;
  public floorWeight!: number;

  public isNotFirstFloor: boolean = false;
  public isNotLastFloor: boolean = false;
  public isLastFloor: boolean = false;

  public countFloorMin!: number;
  public countFloorPreference!: number;
  public countFloorMax!: number;
  public countFloorWeight!: number;

  public isFlat: boolean = false;
  public isAtelierHome: boolean = false;
  public isApartments: boolean = false;
  public isCottage: boolean = false;
  public isPrivateHome: boolean = false;
  public apartmentTypeWeight!: number;

  public isDDU: boolean = false;
  public isHBCAgreement: boolean = false;
  public isPREP: boolean = false;
  public isAssignment: boolean = false;
  public saleTypeWeight!: number;

  public isWithoutFinishing: boolean = false;
  public isPreCleaning: boolean = false;
  public isFinishing: boolean = false;
  public isEconomyClass: boolean = false;
  public isComfortClass: boolean = false;
  public isBusinessClass: boolean = false;
  public repairWeight!: number;

  public isBalcony: boolean = false;
  public isInsulatedBalcony: boolean = false;
  public isLoggia: boolean = false;
  public balconyWeight!: number;

  public isUpto27: boolean = false;
  public isFrom27: boolean = false;
  public isFrom3: boolean = false;
  public isFrom35: boolean = false;
  public ceilingHeightWeight!: number;

  public isBrick: boolean = false;
  public isMonolithic: boolean = false;
  public isPanel: boolean = false;
  public isMonolithicBrick: boolean = false;
  public isReinforcedConcrete: boolean = false;
  public isAnother: boolean = false;
  public houseTypeWeight!: number;

  public isSmart: boolean = false;
  public isNotSmart: boolean = false;
  public isSmartHomeWeight!: number;


  constructor() {
  }

  ngOnInit(): void {
  }

  public restore(): void {
    window.location.reload();
  }

  public search(): void {
    this.toSearch = {
      quantityRooms: this.getQuantityRooms(),
      isEuro: this.getIsEuro(),

      price: this.getPrice(),
      priceWeight: this.getWeight(this.priceWeight),

      countOfApartmentsFerFloor: this.getCountOfApartmentsFerFloor(),
      countOfApartmentsFerWeight: this.getWeight(this.countOfApartmentsFerFloorWeight),

      squarePrice: this.getSquarePrice(),
      squarePriceWeight: this.getWeight(this.squarePriceWeight),

      square: this.getSquare(),
      squareWeight: this.getWeight(this.squareWeight),

      residentialSquare: this.getResidentialSquare(),
      residentialSquareWeight: this.getWeight(this.residentialSquareWeight),

      squareKitchen: this.getSquareKitchen(),
      squareKitchenWeight: this.getWeight(this.squareKitchenWeight),

      floor: this.getFloor(),
      floorWeight: this.getWeight(this.floorWeight),
      isLastFloor: this.isLastFloor,
      isNotFirstFloor: this.isNotFirstFloor,
      isNotLastFloor: this.isNotLastFloor,

      countFloor: this.getCountFloor(),
      countFloorWeight: this.getWeight(this.countFloorWeight),

      apartmentType: this.getApartmentType(),
      apartmentTypeWeight: this.getWeight(this.apartmentTypeWeight),

      saleType: this.getSaleType(),
      saleTypeWeight: this.getWeight(this.saleTypeWeight),

      repair: this.getRepair(),
      repairWeight: this.getWeight(this.repairWeight),

      isBalcony: this.isBalcony,
      isLoggia: this.isLoggia,
      isInsulatedBalcony: this.isInsulatedBalcony,
      balconyWeight: this.getWeight(this.balconyWeight),

      ceilingHeight: this.getCeilingHeight(),
      ceilingHeightWeight: this.getWeight(this.ceilingHeightWeight),

      houseType: this.getHouseType(),
      houseTypeWeight: this.getWeight(this.houseTypeWeight),

      isSmartHome: this.getIsSmartHome(),
      isSmartHomeWeight: this.getWeight(this.isSmartHomeWeight)
    }

    sessionStorage.setItem('toSmartSearch', JSON.stringify(this.toSearch));
    sessionStorage.setItem('searchType', "SmartSearch");
  }

  private getQuantityRooms(): number[] | null {
    let quantityRooms: number[] = []
    if (this.isAtelier)
      quantityRooms.push(0);
    if (this.isOne)
      quantityRooms.push(1);
    if (this.isTwo)
      quantityRooms.push(2);
    if (this.isThree)
      quantityRooms.push(3);
    if (this.isFour)
      quantityRooms.push(4);
    if (this.isFreeLayout)
      quantityRooms.push(10);
    if (this.isFivePlus)
      quantityRooms.push(5);
    if (this.isOneEuro)
      quantityRooms.push(1);
    if (this.isTwoEuro)
      quantityRooms.push(2);
    if (this.isThreeEuro)
      quantityRooms.push(3);

    return quantityRooms.length > 0 ? quantityRooms : null;
  }

  private getIsEuro(): boolean[] | null {
    let isEuro: boolean[] = []
    if (this.isAtelier)
      isEuro.push(false);
    if (this.isOne)
      isEuro.push(false);
    if (this.isTwo)
      isEuro.push(false);
    if (this.isThree)
      isEuro.push(false);
    if (this.isFour)
      isEuro.push(false);
    if (this.isFreeLayout)
      isEuro.push(false);
    if (this.isFivePlus)
      isEuro.push(false);
    if (this.isOneEuro)
      isEuro.push(true);
    if (this.isTwoEuro)
      isEuro.push(true);
    if (this.isThreeEuro)
      isEuro.push(true);

    return isEuro.length > 0 ? isEuro : null;
  }

  private getPrice(): number[] | null {
    if (this.priceMin == null && this.pricePreference == null && this.priceMax == null)
      return null;
    return [Number(this.priceMin), Number(this.pricePreference), Number(this.priceMax)];
  }

  private getCountOfApartmentsFerFloor(): number[] | null {
    if (this.countOfApartmentsFerFloorMin == null && this.countOfApartmentsFerFloorPreference == null && this.countOfApartmentsFerFloorMax == null)
      return null;
    return [Number(this.countOfApartmentsFerFloorMin), Number(this.countOfApartmentsFerFloorPreference), Number(this.countOfApartmentsFerFloorMax)];
  }

  private getSquarePrice(): number[] | null {
    if (this.priceMin == null && this.pricePreference == null && this.priceMax == null)
      return null;
    return [Number((this.priceMin)), Number(this.pricePreference), Number(this.priceMax)];
  }

  private getSquare(): number[] | null {
    if (this.squareMin == null && this.squarePreference == null && this.squareMax == null)
      return null;
    return [Number((this.squareMin)), Number(this.squarePreference), Number(this.squareMax)];
  }

  private getResidentialSquare(): number[] | null {
    if (this.residentialSquareMin == null && this.residentialSquarePreference == null && this.residentialSquareMax == null)
      return null;
    return [Number((this.residentialSquareMin)), Number(this.residentialSquarePreference), Number(this.residentialSquareMax)];
  }

  private getSquareKitchen(): number[] | null {
    if (this.squareKitchenMin == null && this.squareKitchenPreference == null && this.squareKitchenMax == null)
      return null;
    return [Number((this.squareKitchenMin)), Number(this.squareKitchenPreference), Number(this.squareKitchenMax)];
  }

  private getFloor(): number[] | null {
    if (this.floorMin == null && this.floorPreference == null && this.floorMax == null)
      return null;
    return [Number((this.floorMin)), Number(this.floorPreference), Number(this.floorMax)];
  }

  private getCountFloor(): number[] | null {
    if (this.countFloorMin == null && this.countFloorPreference == null && this.countFloorMax == null)
      return null;
    return [Number((this.countFloorMin)), Number(this.countFloorPreference), Number(this.countFloorMax)];
  }

  private getApartmentType(): string[] | null {
    let apartmentType: string[] = [];
    if (this.isFlat)
      apartmentType.push('Квартира')
    if (this.isAtelierHome)
      apartmentType.push('Студия')
    if (this.isApartments)
      apartmentType.push('Апартаменты')
    if (this.isCottage)
      apartmentType.push('Коттедж')
    if (this.isPrivateHome)
      apartmentType.push('Частный')

    return apartmentType.length > 0 ? apartmentType : null;
  }

  private getSaleType(): string[] | null {
    let saleType: string[] = [];
    if (this.isDDU)
      saleType.push('ДДУ')
    if (this.isHBCAgreement)
      saleType.push('Договор ЖСК')
    if (this.isPREP)
      saleType.push('ДКП')
    if (this.isAssignment)
      saleType.push('Переуступка')

    return saleType.length > 0 ? saleType : null;
  }

  private getRepair(): string[] | null {
    let repair: string[] = [];
    if (this.isWithoutFinishing)
      repair.push('Без отделки')
    if (this.isPreCleaning)
      repair.push('Предчистовая')
    if (this.isFinishing)
      repair.push('Чистовая')
    if (this.isEconomyClass)
      repair.push('Эконом-класс')
    if (this.isComfortClass)
      repair.push('Комфорт-класс')
    if (this.isBusinessClass)
      repair.push('Бизнес-класс')

    return repair.length > 0 ? repair : null;
  }

  private getCeilingHeight(): number[] | null {
    let ceilingHeight: number[] = [];
    if (this.isUpto27)
      ceilingHeight.push(2.69)
    if (this.isFrom27)
      ceilingHeight.push(2.7)
    if (this.isFrom3)
      ceilingHeight.push(3)
    if (this.isFrom35)
      ceilingHeight.push(3.5)

    return ceilingHeight.length > 0 ? ceilingHeight : null;
  }

  private getHouseType(): string[] | null {
    let houseType: string[] = [];
    if (this.isWithoutFinishing)
      houseType.push('Кирпичный')
    if (this.isPreCleaning)
      houseType.push('Монолитный')
    if (this.isFinishing)
      houseType.push('Панельный')
    if (this.isEconomyClass)
      houseType.push('Монолитно-кирпичный')
    if (this.isComfortClass)
      houseType.push('Железобетонный')
    if (this.isBusinessClass)
      houseType.push('Другой')

    return houseType.length > 0 ? houseType : null;
  }

  private getIsSmartHome(): boolean[] | null {
    let isSmartHome: boolean[] = [];
    if (this.isSmart)
      isSmartHome.push(true);
    if (this.isNotSmart)
      isSmartHome.push(false);

    return isSmartHome.length > 0 ? isSmartHome : null;
  }

  private getWeight(weight: number): number {
    if (weight == null || weight == 0)
      return 1 / 10;
    return weight / 10;
  }
}
