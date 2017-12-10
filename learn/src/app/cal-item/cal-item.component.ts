import { Component, OnInit, Input } from '@angular/core';
import {MdButtonModule} from '@angular/material/';
import {Prog} from '../Shared/prog'

@Component({
  selector: 'app-cal-item',
  templateUrl: './cal-item.component.html',
  styleUrls: ['./cal-item.component.scss']
})
export class CalItemComponent implements OnInit {
  
  
  constructor() { }
   
  @Input() progcoll:Prog;

  ngOnInit() {
  }

  

}
