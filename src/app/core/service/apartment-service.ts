import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApartmentSearchDto, ApartmentSmartSearchDto} from "../model/search";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  constructor(private readonly http: HttpClient) {
  }

  public search(toSearch: ApartmentSearchDto, size: number, page: number): Observable<Object> {
    return this.http.post(`/api/v1/apartments/all?size=${size}&page=${page}`, null);
  }

  public smartSearch(toSearch: ApartmentSmartSearchDto, size: number, page: number): Observable<Object> {
    return this.http.post(`/api/v1/apartments/smart-search?size=${size}&page=${page}`, toSearch);
  }

  public searchWithPreferences(): Observable<Object> {
    return this.http.get(``);
  }

  public getApartment(uid: string): Observable<Object> {
    return this.http.get(`/api/v1/apartments/card/card/${uid}`);
  }
}
