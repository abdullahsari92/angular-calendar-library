# angular-calendar-library
angular da özgün tasarım yazdığım calendar kutuphanesi

<div align="center">

# sar-calendar
</div>

## Installation

```
npm i @sar-calendar
```

## Usage

Import `SarCalendarModule` in `AppModule` `imports` array
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SarCalendarModule } from 'sar-calendar';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SarCalendarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

After that you can use `sar-calendar` component in template

```html
<div style="width: 700px; margin: 20px;">

  
  <sar-calendar (startDate)="getDate($event)" [monthNames]="monthNames"> </sar-calendar>

  Tarih = {{this.dayDate}}


</div>
```

![sar-calendar](https://raw.githubusercontent.com/abdullahsari92/angular-calendar-library/main/sar-calendar-use/src/assets/tasarim/calendar.png)