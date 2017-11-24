import { Component, OnInit } from '@angular/core';

import {Service} from '../Shared/service';

import {OperationService} from '../Services2/operation.service'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
   
  SelectedService:Service;
  services : Service[];


  constructor(private opServ:OperationService) { }

  ngOnInit() {
    this.services=  this.opServ.getServices();
  }
  
  onSelect(serv:Service){
    this.SelectedService=serv;
  }

}
