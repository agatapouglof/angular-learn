import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dataSrv: DataService) { }

  ngOnInit() {
  }
  add(){
    this.dataSrv.emitInt();
  }

}
