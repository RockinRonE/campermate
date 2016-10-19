import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the MyDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-details-page',
  templateUrl: 'my-details-page.html'
})
export class MyDetailsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MyDetailsPage Page');
  }

}
