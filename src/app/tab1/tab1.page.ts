import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  liststudent : [];

  constructor(private storage: Storage) { 
    this.calldata();
  }
  ngOnInit() {
  }

  calldata() {
    this.storage.get('MY_ACCOUNT').then((val) => {
      console.log('Account is', val);
      this.liststudent = val;
      console.log(this.liststudent);
    });
  }

  logoutdata() {
    this.storage.remove('MY_ACCOUNT').then((val) => {
      console.log('Account is', val);
      this.liststudent = val;
    });
  }
}

