import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-neweventalert',
  templateUrl: './neweventalert.component.html',
  styleUrls: ['./neweventalert.component.css']
})
export class NeweventalertComponent implements OnInit {

  eventForm : FormGroup;

  @Input() name;

  constructor(public activeModal: NgbActiveModal, private fb:FormBuilder) { }

  ngOnInit() {
    this.eventForm = this.fb.group({
      nom : ['',Validators.required],
    })
  }

  public submitForm(){
    console.log("formulaire validé");
  }

}
