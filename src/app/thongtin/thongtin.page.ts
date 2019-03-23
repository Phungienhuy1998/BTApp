
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-thongtin',
  templateUrl: './thongtin.page.html',
  styleUrls: ['./thongtin.page.scss'],
})

export class ThongtinPage implements OnInit {

  liststudent : [];

  constructor(private storage: Storage,private _Service: ServiceService) { 
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
  goBack() {
    this._Service.goBack();
  }
  }


