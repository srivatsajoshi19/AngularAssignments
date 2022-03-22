import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'day-one';
  
  name: string = '';
  email: string = '';

  onSubmit(): void {
    alert('Data Saved');
    this.onReset();
  }

  onReset(): void {
    this.name = '';
    this.email = '';
  }
  isDisabled(){
    return !(this.name.length && this.email.length);
  }
}
