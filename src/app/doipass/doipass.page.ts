import { Component, OnInit } from '@angular/core';
import { NavController, AlertController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import*as firebase from 'firebase';
import {FIREBASE_CONFIG ,getdata} from '../config_firebase';
import { Router } from '@angular/router';
import {ServiceService} from '../services/service.service';

@Component({
  selector: 'app-doipass',
  templateUrl: './doipass.page.html',
  styleUrls: ['./doipass.page.scss'],
})
export class DoipassPage implements OnInit {
  item : any={};
  liststudent : [];

  account : string ='';
  oldpass : string ='';
  newpass : string ='';
  againnewpass: string='';

  constructor(public navCtrl :NavController,  private storage: Storage, private alertCtrl: AlertController, private router : Router ,private _Service: ServiceService) {
    this.calldata();
    this.account = this.item.email;
   }

  ngOnInit() {
  }

  calldata() {
    this.storage.get('MY_ACCOUNT').then((val) => {
      console.log('Account is', val);
      this.liststudent = val;
      this.item = val;
      console.log(this.liststudent);
    });
  }

  changepass() {
    // console.log("pass");
    console.log(this.item.pass);
    if (this.oldpass === this.item.pass) {
      console.log("ok");
      if (this.newpass.length!=0 && this.againnewpass.length != 0) {
        if (this.newpass === this.againnewpass) {
          firebase.database().ref('account/' + this.item.key).update({
              pass: this.newpass
          });
          this.showAlert("Mật Khẩu đổi thành công.");
          this.router.navigate(["/login"]);
        } else {
        this.showAlert("Mật khẩu nhập lại không đúng.")
      }
    } else {
        this.showAlert("vui lòng nhập mật khẩu mới.")
    }
      } else {
      this.showAlert("Mật Khẩu cũ không đúng.")
    }
  }

  async showAlert(str) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: str,
      buttons: ['OK'],
    });
    return alert.present();
  }

  goBack() {
    this._Service.goBack();
    }
  

}
