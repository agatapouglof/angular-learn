import { Injectable, EventEmitter, Output } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  datas = [];
  val = 0;

  @Output()
  dataEmitter = new EventEmitter();
  constructor() { }

  emitInt(){
    this.dataEmitter.emit(++this.val);
    // this.dataEmitter.error("data service error");
  }
}
