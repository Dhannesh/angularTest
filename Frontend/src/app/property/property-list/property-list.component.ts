
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty>;
  SellRent: number;

  constructor(private route:ActivatedRoute, private housingService:HousingService) {
    this.properties = [];
    this.SellRent = 1;
  }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
            this.properties = data;
            console.log(this.route.snapshot.url.toString());

          }, error => {
            console.log(error);

          }
    )
  }
}
