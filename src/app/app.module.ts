import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Storage } from '@ionic/storage';

import { LocationPage } from '../pages/location-page/location-page';
import { MyDetailsPage } from '../pages/my-details-page/my-details-page';
import { CampDetailsPage } from '../pages/camp-details-page/camp-details-page';

import { GoogleMaps } from '../providers/google-maps';
import { Connectivity } from '../providers/connectivity';
import { Data } from '../providers/data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LocationPage,
    MyDetailsPage,
    CampDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LocationPage,
    MyDetailsPage,
    CampDetailsPage
  ],
  providers: [Data, Storage, GoogleMaps, Connectivity]
})
export class AppModule {}
