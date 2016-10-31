import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class Data {

  constructor(public storage: Storage) {

  }
   setMyDetails(data: Object): void {
     let newData = JSON.stringify(data);
     this.storage.set('mydetails', newData);
   }

   setCampDetails(data: Object): void {
     let newData = JSON.stringify(data);
     this.storage.set('campdetails', newData);
   }

   setLocation(data: Object): void {
     let newData = JSON.stringify(data);
     this.storage.set('location', newData);
   }

   getMyDetails(): Promise<any> {
     return this.storage.get('mydatails');
   }

   getCampDetails(): Promise<any> {
     return this.storage.get('campdetails');
   }

   getLocation(): Promise<any> {
     return this.storage.get('location');
   }
}
