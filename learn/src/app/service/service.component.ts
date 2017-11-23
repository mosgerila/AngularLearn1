import { Component, OnInit } from '@angular/core';

import {Service} from '../Shared/service'

const serv: Service[]= [
  { name:'Tuns Babati',
   image:'../assets/images/barb1.jpg',
   label:'Hot',
   price:'55',
   time:'23 Min',
   description:'Tuns standart',
  },
  { name:'Tuns Femei',
  image:'../assets/images/fem1.jpg',
  label:'Beautiful',
  price:'73',
  time:'45 Min',
  description:'Tuns standart',
 },

];

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
   
  services : Service[] = serv;

  SelectedService:Service=serv[0];

  constructor() { }

  ngOnInit() {
  }

}
