import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  liststudent : [];

  constructor(private storage: Storage) { 
  }
  ngOnInit() {
  }

}

