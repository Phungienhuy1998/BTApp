import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.page.html',
  styleUrls: ['./trangchu.page.scss'],
})
export class TrangchuPage implements OnInit {

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


