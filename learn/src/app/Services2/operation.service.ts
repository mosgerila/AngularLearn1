import { Injectable } from '@angular/core';
import {Service} from '../Shared/service';
import {serv} from '../Shared/services';

@Injectable()
export class OperationService {

  constructor() { }

  getServices():Service[] {
    return serv;
  }

}
