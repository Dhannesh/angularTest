import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProperty } from '../property/IProperty';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {
  }

  getAllProperties(SellRent: number) : Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const jsonData = JSON.stringify(data);
        const propertyArray: Array<IProperty> = JSON.parse(jsonData);
        return propertyArray.filter((item:IProperty)=> item.SellRent === SellRent);
      })
    );
  }
}
