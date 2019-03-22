import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service'
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.page.html',
  styleUrls: ['./chitiet.page.scss'],
})
export class ChitietPage implements OnInit {
  liststudent: [];

  constructor(private _Service: ServiceService, private storage: Storage) { }

  ngOnInit() {
    this.calldata();
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

  goBack() {
    this._Service.goBack();
  }
}
