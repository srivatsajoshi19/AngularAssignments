import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  shape = '';
  color = '';
  shapeClass = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  drawShape() {
    this.shapeClass = this.sharedService.getClassName(this.shape, this.color);
  }
}
