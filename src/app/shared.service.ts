import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  getClassName(shape:string, color:string) {
    return shape + '-' + color;
  }
}
