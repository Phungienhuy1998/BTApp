import { Component, OnInit } from '@angular/core';
import*as firebase from 'firebase';
import {FIREBASE_CONFIG ,getdata} from '../config_firebase';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  edt_email="";
  edt_pass="";
  account=[];
  // listStudent=[];

  constructor(private router: Router, private storage: Storage, public navCtrl :NavController, private alertCtrl: AlertController) { 
    // this.btn_getDocument();
  }
btn_login () {
    // console.log(this.edt_email);
    // console.log(this.edt_pass);
    let ref =firebase.database().ref('account/').orderByChild("email").equalTo(this.edt_email);
    let item;
    ref.on('value',resp=>{
      this.account=getdata(resp);
      if(this.account.length>0){
        if(this.account[0].pass===this.edt_pass){
          console.log("Conguration")
          this.router.navigate(["/trangchu"]);
          this.storage.set('MY_ACCOUNT', this.account[0]);
   
          this.showAlert("Đăng Nhập Thành Công")
        }else{
          console.log("wrong password");
          this.showAlert("Mật Khẩu hoặc Email sai.")
        }
      }else{
        console . log ( " Account does not exist " );
        this.showAlert("Tài Khoản Không Tồn Tại.")
      }
    })
  }
  ngOnInit() {
  }
  //btn_getDocument(){
   // let ref = firebase.database().ref('account/');
   // ref.on('value', resp => {
     // this.listStudent = getdata(resp);
      //console.log(this.listStudent)
    //});
  //}
  

  async showAlert(str) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: str,
      buttons: ['OK'],
    });
    return alert.present();
  }
} 


