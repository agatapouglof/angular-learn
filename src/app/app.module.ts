import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimerComponent } from './timer/timer.component';
import { TimeFormatPipe } from './timer/time-format.pipe';
import { DataService } from './shared/services/data.service';
import { DatalistComponent } from './datalist/datalist.component';

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimerComponent,
    TimeFormatPipe,
    DatalistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
