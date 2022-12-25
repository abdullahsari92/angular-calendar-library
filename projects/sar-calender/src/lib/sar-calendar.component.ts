import { DatePipe } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'sar-calendar',
  templateUrl: './sar-calendar.component.html', 
  styleUrls: ['./sar-calendar.component.css']

})
export class SarCalendarComponent implements OnInit {

 
  @Output() startDate: EventEmitter<any> = new EventEmitter();
  activeMount:number=new Date().getMonth() +1;
  activeDay:number= new Date().getDate();
  activeYear:number = new Date().getFullYear();
  @ViewChild('myCalender') input!: ElementRef; 
    aylar: any[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    constructor(public datepipe: DatePipe) { }
  
    ngOnInit(): void {
   
   

    //this.activeDay = 28;
      this.getDays(this.activeMount);
      this.getTodo( this.activeDay);
    }
  
    ngAfterViewInit(){


      if(this.activeDay>8)
      {
      this.input.nativeElement.scrollTo(200,0)
      }

      if(this.activeDay>10)
      {
      this.input.nativeElement.scrollTo(600,0)
      }

      if(this.activeDay>15)
      {
      this.input.nativeElement.scrollTo(1000,0)
      }
      if(this.activeDay>19)
      {
      this.input.nativeElement.scrollTo(1300,0)
      }
      if(this.activeDay>24)
      {
      this.input.nativeElement.scrollTo(1600,0)
      }


    }
  
  
    gunler: any[] = [];  
    days: any[] = [];
    getDays(mount: number) {
  
      this.days = [];
      var currentYear = new Date().getFullYear();

      var gunSayisi = new Date(currentYear, mount, 0).getDate();// bir ayın içinde kaç gün olduğunu buluyor
  
      this.activeMount=mount;
      for (let i = 1; i <= gunSayisi; i++) {
  
  
        var ta =mount.toString()+"/"+i.toString()+ "/" +currentYear;
        
        let gunAdi= this.datepipe.transform(ta, "E");   
  
        var day ={dayNumber:i ,dayName:gunAdi};
  
        this.days.push(day);     
  
      } 
  
    }
  
  
    isActive(item:number):string
    {
  
       if(this.activeMount == item)
       {
         return "mountActive";
       }
     
       return "";
    }
  
    isActiveDay(day:number)
    {
  
        if(this.activeDay == day)
        {
  
          return "dayActive";
        }
  
       return "";
  
    }
  
    getTodo(day:number)
    {
         
        this.activeDay =day;

        let tire1 = this.activeMount<10?"-0":"-";
        let tire2= day<10?"-0":"-";

        var tarih = this.activeYear + tire1 + this.activeMount + tire2 +day;
     this.startDate.emit(tarih);
  
    }
}

