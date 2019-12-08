import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NeweventalertComponent } from '../shared/components/neweventalert/neweventalert.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dataSrv: DataService, private modalService: NgbModal) { }

  ngOnInit() {
  }
  add(){
    this.dataSrv.emitInt();
    const modalRef = this.modalService.open(NeweventalertComponent );
    modalRef.componentInstance.name = 'test';
  }

}
