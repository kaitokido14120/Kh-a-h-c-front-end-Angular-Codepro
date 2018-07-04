import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnewayBindingComponent } from './oneway-binding/oneway-binding.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  exports:[OnewayBindingComponent],
  declarations: [OnewayBindingComponent]
})
export class OneWayBindingModule { }
