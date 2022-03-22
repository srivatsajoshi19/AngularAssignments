import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  shape = '';
  color = '';
  shapeClass = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  drawShape() {
    this.shapeClass = this.sharedService.getClassName(this.shape, this.color);
  }
}
