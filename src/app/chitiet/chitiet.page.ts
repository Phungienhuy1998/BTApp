import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../services/service.service'
@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.page.html',
  styleUrls: ['./chitiet.page.scss'],
})
export class ChitietPage implements OnInit {

  constructor(private _Service:ServiceService) { }

  ngOnInit() {
   
  }
goBack(){
  this._Service.goBack();
}
}
