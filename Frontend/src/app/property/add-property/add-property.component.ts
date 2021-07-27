import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/iproperty-base';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  //will come from master
  propertyTypes: Array<string> = ['House','Apartment','Duplex'];
  furnishTypes: Array<string> = ['Fully','Semi','Unfurnished'];
  propertyView:IPropertyBase = {
    Id: null,
    SellRent:null,
    Name:null,
    PType: null,
    FType:null,
    Price: null,
    BHK: null,
    BuiltArea: null,
    City: null,
    RTM: null,

  };

  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(){
    console.log(this.addPropertyForm);

  }

  selectTab(tabId: number){
    this.formTabs.tabs[tabId].active = true;
  }

}
