import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveIfComponent } from './directive-if/directive-if.component';
import { DirectiveIfElseComponent } from './directive-if-else/directive-if-else.component';
import { DirectiveSwitchComponent } from './directive-switch/directive-switch.component';
import { DirectiveForComponent } from './directive-for/directive-for.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[DirectiveIfComponent,DirectiveIfElseComponent,DirectiveSwitchComponent,DirectiveForComponent],
  declarations: [DirectiveIfComponent, DirectiveIfElseComponent, DirectiveSwitchComponent, DirectiveForComponent]
})
export class DirectiveModule { }
