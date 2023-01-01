import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dayDate:string="";
  monthNames: any[] = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağus','Eylül', 'Ekim', 'Kasım','Aralık'];

  getDate(date:any)
  {
  
    this.dayDate = date;
  
  }

}


