import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {AppService} from "./app.service";
import {FormsModule} from "@angular/forms";
import {SearchPipe} from "./pipe/search/search.pipe";




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SearchPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
