import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsdToInrPipe } from './pipes/usd-to-inr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsdToInrPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsdToInrPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
