import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {

  list = [];
  constructor(private dataSrv : DataService) { }

  ngOnInit() {
    this.dataSrv.dataEmitter.subscribe(next => {
      this.list.push(next);
      console.log(next);
    },
      err => { console.log(`GOT ERROR : ${err}`) },
      complete =>{console.log("observer dataEmitter complete")})
  }

}
