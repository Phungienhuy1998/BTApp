import { Component, OnInit } from '@angular/core';
import*as firebase from 'firebase';
import {FIREBASE_CONFIG ,getdata} from '../config_firebase';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { StorageService,item} from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  edt_email="";
  edt_pass="";
  account=[];
  listStudent=[];
  selectedProduct : Subject<any> = new Subject;

  user:item=<item>{};

  constructor(private router: Router, private storage: StorageService) { 
    this.btn_getDocument();
  }

  ngOnInit() {
  }
  btn_login(){
    // console.log(this.edt_email);
    // console.log(this.edt_pass);
    // let ref =firebase.database().ref('account/').orderByChild("email").equalTo(this.edt_email);
    // ref.on('value',resp=>{
    //   this.account=getdata(resp);
    //   if(this.account.length>0){
    //     if(this.account[0].pass===this.edt_pass){
    //       console.log("Conguration")
    //       this.router.navigate(['']);
    //     }else{
    //       console.log("wrong password")
    //     }
    //   }else{
    //     console.log("tai khoan khong ton tai")
    //   }
    // })
    // let Object={
    //   address: "sdfds",
    //   diem :{
    //     dia:10,
    //     toan:1,
    //     ly:2
    //   },
    //   email :"abc@gmail.com",
    //   monhoc :{
    //     mon1:"toan",
    //     mon2:"ly"
    //   },
    //   name :"Trinh Thang Binh",
    //   pass :"123456"
    // }
    // firebase.database().ref('account/').push({});
    this.user.email="abc@gmail.com";
    this.user.pass="123";
    this.storage.addItem(this.user).then(item=>{
      console.log(item)
    })
    

  }

    btn_getDocument(){
    // console.log(this.edt_email);
    // console.log(this.edt_pass);
    let ref =firebase.database().ref('account/');
    ref.on('value',resp=>{
      this.listStudent=getdata(resp);
      console.log(this.listStudent)
         });
  }

getpopup(det) {
  this.selectedProduct.next(det);
  }
}
