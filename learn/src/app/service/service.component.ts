import { Component, OnInit } from '@angular/core';

import {Service} from '../Shared/service';

import {serv} from '../Shared/services';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
   
  SelectedService:Service;
  services : Service[] = serv;


  constructor() { }

  ngOnInit() {
  }
  
  onSelect(serv:Service){
    this.SelectedService=serv;
  }

}
