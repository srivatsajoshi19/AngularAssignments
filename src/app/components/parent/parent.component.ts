import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements AfterViewInit {
  constructor(private cd: ChangeDetectorRef) {}

  message: string = 'Hello Child';
  messageFromChild: string;
  messageFromViewChild: string;
  @ViewChild(ChildComponent) child: any;

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.messageFromViewChild = this.child.message2;
    // }, 0);
    
    this.messageFromViewChild = this.child.message2;
    this.cd.detectChanges();
  }

  receiveMessage($event: any) {
    this.messageFromChild = $event;
  }
}
