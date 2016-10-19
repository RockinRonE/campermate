import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the LocationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-location-page',
  templateUrl: 'location-page.html'
})
export class LocationPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LocationPage Page');
  }

}
