import { Component } from '@angular/core';
import { UsdToInrPipe } from './pipes/usd-to-inr.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Custom pipes';
  today = new Date();
  money = 100;

  temp: number;

  constructor(private usdToInr: UsdToInrPipe) {
    this.temp = this.usdToInr.transform(200, 76);
    console.log(this.temp);
    //15200
  }
}
