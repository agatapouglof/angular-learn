import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimerComponent } from './timer/timer.component';
import { TimeFormatPipe } from './timer/time-format.pipe';
import { DataService } from './shared/services/data.service';
import { DatalistComponent } from './datalist/datalist.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListcontentComponent } from './datalist/listcontent/listcontent.component';
import { DatelanguageComponent } from './datelanguage/datelanguage.component';

import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from './shared/services/countries.service';
import { DatelanguagePipe } from './shared/pipes/datelanguage.pipe';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NeweventalertComponent } from './shared/components/neweventalert/neweventalert.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimerComponent,
    TimeFormatPipe,
    DatalistComponent,
    ListcontentComponent,
    DatelanguageComponent,
    DatelanguagePipe,
    NeweventalertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  entryComponents: [NeweventalertComponent],
  providers: [DataService, CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
