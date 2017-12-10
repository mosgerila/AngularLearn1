import { Component, OnInit, Input } from '@angular/core';



import {Service} from '../Shared/service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor() { }
  
 @Input() serv:Service;
 
 
  
  ngOnInit() {
  }

}
