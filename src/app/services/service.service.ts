import { Injectable } from '@angular/core';
import {NavController} from '@ionic/angular';
import { FIREBASE_CONFIG, getdata } from '../config_firebase';
import *as firebase from 'firebase';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  edt_email = "";
  edt_pass = "";
  account = [];
  listStudent = [];

  constructor(private navCtrl:NavController) { }
  goBack(){
    this.navCtrl.back();

  }
  getListStudent() {
    // console.log(this.edt_email);
    // console.log(this.edt_pass);
    let ref = firebase.database().ref('account/');
    ref.on('value', resp => {
      this.listStudent = getdata(resp);
      console.log(this.listStudent)
    });
  }
  }
