import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../services/service.service'
@Component({
  selector: 'app-ketqua',
  templateUrl: './ketqua.page.html',
  styleUrls: ['./ketqua.page.scss'],
})
export class KetquaPage implements OnInit {

  constructor(private _Service:ServiceService) { }

  ngOnInit() {
  }
goBack(){
  this._Service.goBack();
}
}
