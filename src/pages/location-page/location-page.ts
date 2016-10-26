import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { GoogleMaps } from '../../providers/googlemaps';
import { Data } from '../../providers/data';

@Component({
  selector: 'location-page',
  templateUrl: 'location-page.html'
})

export class LocationPage {


  @ViewChild('map') mapElement: ElementRef; 
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  latitude: number;
  longitude: number; 

  constructor(public navCtrl: NavController, public maps: GoogleMaps, public platform: Platform, public dataService: Data, public alertCtrl: AlertController) {

    
  }

  ionViewDidLoad(): void {

  }

  setLocation(): void {

  }

  takeMeHome(): void {

  }

}
