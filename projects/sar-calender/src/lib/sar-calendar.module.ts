import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SarCalendarComponent } from './sar-calendar.component';


@NgModule({
  declarations: [
    SarCalendarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

  ],
  bootstrap: [SarCalendarComponent],
  exports: [
    SarCalendarComponent
  ]
})
export class SarCalendarModule { }
