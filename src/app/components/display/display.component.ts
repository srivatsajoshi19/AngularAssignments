import {
  Component,
  OnInit,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit, OnDestroy {
  isChild = false;

  constructor() {
    console.log('display constructor');
  }

  ngOnInit(): void {
    console.log('display ngOnInit');
  }
  ngOnDestroy(): void {
    console.log('Display Component ngOnDestroy');
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }
}
