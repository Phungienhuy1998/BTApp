
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-thongtin',
  templateUrl: './thongtin.page.html',
  styleUrls: ['./thongtin.page.scss'],
})
export class ThongtinPage implements OnInit {

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
  }


