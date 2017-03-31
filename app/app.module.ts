import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PocTestComponent } from './poc/poc-test.component';

import 'rxjs/add/operator/map';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PocTestComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }