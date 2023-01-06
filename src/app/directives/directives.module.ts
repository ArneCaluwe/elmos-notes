import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrikethroughDirective } from '../directives/strikethrough.directive';
import { HoldDirective } from './hold.directive';

@NgModule({
  declarations: [StrikethroughDirective, HoldDirective],
  imports: [CommonModule],
  exports: [StrikethroughDirective, HoldDirective],
})
export class DirectivesModule {}
