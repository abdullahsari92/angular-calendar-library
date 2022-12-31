import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dayDate:string="";

  getDate(date:any)
  {
  
    this.dayDate = date;
  
  }

}


