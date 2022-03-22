import {
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-display-child',
  templateUrl: './display-child.component.html',
  styleUrls: ['./display-child.component.css'],
})
export class DisplayChildComponent
  implements OnInit, OnDestroy, DoCheck, AfterContentInit
{
  counter = 0;
  interval: any;

  @ContentChild('projectedContent') projectedContent: any;
  constructor() {
    console.log('display child constructor');
  }

  ngOnInit(): void {
    console.log('display child onInit');
    this.interval = setInterval(() => {
      this.counter = this.counter + 1;
      console.log(this.counter);
    }, 1000);
    console.log('OnInit--', this.projectedContent);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log('display child onDestroy');
  }
  ngDoCheck() {
    console.log('display child doCheck');
    console.log("ngDoCheck--" , this.projectedContent);
  }
  ngAfterContentInit(): void {
    console.log('In after content Init');
    console.log("ngAfterContentInit--" , this.projectedContent);
  }
}
