import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../providers/data';


@Component({
  selector: 'camp-details-page',
  templateUrl: 'camp-details-page.html'
})
export class CampDetailsPage {
  campDetailsForm: FormGroup; 

  constructor(public nav: NavController, public formBuilder: FormBuilder, public dataService: Data) {

    this.campDetailsForm = formBuilder.group({
      gateAccessCode: [''],
      amenitiesCode: [''],
      wifiPassword: [''],
      phoneNumber: [''],
      departure: [''],
      notes: ['']
    });

    this.dataService.getCampDetails().then((details) => {
      let savedDetails: any = false; 

      if(details && typeof(details) != "undefined") {
        savedDetails = JSON.parse(details); 
      }

      let formControls: any = this.campDetailsForm.controls; 

      if(savedDetails) {
        formControls.getAccessCode.setValue(savedDetails.gateAccessCode);
        formControls.ammenitiesCode.setValue(savedDetails.ammenitiesCode);
        formControls.wifiPassword.setValue(savedDetails.wifiPassword);
        formControls.phoneNumber.setValue(savedDetails.phoneNumber);
        formControls.departure.setValue(savedDetails.departure);
        formControls.notes.setValue(savedDetails.notes);
      }
    });

  }

  saveForm(): void {
    let data = this.campDetailsForm.value; 
    // this.dataService.setCampDetails(data); 
    
  }

}
