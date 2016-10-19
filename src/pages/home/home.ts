import { Component } from '@angular/core';
import { LocationPage } from '../location-page/location-page';
import { MyDetailsPage } from '../my-details-page/my-details-page';
import { CampDetailsPage } from '../camp-details-page/camp-details-page';


@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})

export class HomePage {

  tab1Root: any = LocationPage;
  tab2Root: any = MyDetailsPage;
  tab3Root: any = CampDetailsPage; 

  constructor() {
    
  }

}
