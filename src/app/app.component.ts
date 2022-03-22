import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Creating Custom Directives';
  
  public products = [
    {
      productName: 'Shoes',
      isAvailable: true,
    },
    {
      productName: 'Belts',
      isAvailable: true,
    },
    {
      productName: 'Watches',
      isAvailable: false,
    },
  ];
}
