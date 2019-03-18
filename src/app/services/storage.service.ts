import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

//thuoc tinh doi tuong
export interface item {
  email: string,

  pass: string
}

const ITEMS_KEY = 'my-user';

@Injectable({
  providedIn: 'root'
})

export class StorageService {


  constructor(private storage: Storage) {

  }
     // READ
  getItems(): Promise<item[]> {
    return this.storage.get(ITEMS_KEY);
  }
  // CREATE
  addItem(giatri_User: item): Promise<any> {
          return this.storage.set(ITEMS_KEY, giatri_User);
  }

}
