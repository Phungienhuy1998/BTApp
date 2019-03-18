import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @Input() list : Subject<any>;
  fulldetails : any[];

  ngOnInit() {
  }
}

