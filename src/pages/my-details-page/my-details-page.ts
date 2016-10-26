import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Data } from '../../providers/data'


@Component({
  selector: 'my-details-page',
  templateUrl: 'my-details-page.html'
})
export class MyDetailsPage {

  myDatailsForm: FormGroup; 

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public dataService, Data) {
    
    this.myDetailsForm = formBuilder.group({
      carRegistration: [''],
      trailerRegistration: [''],
      trailerDimensions: [''],
      phoneNumber: [''],
      notes: ['']
    });
  }

  saveForm(): void {
    let data = this.myDetailsForm.value; 
    // this.dataService.setMyDetails(data);
  }

}
