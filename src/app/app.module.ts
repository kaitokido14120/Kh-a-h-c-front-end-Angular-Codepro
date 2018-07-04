import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneWayBindingModule } from './one-way-binding/one-way-binding.module';
import { BaiTapBindingComponent } from './bai-tap-binding/bai-tap-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectiveModule } from './directive/directive.module';


@NgModule({
  declarations: [
    AppComponent,
    BaiTapBindingComponent
  ],
  imports: [
    BrowserModule,OneWayBindingModule,FormsModule,DirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
