import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { CustomStructuralDirective } from './custom-structural.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CustomStructuralDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
