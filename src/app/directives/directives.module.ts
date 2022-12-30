import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrikethroughDirective } from '../directives/strikethrough.directive';

@NgModule({
  declarations: [StrikethroughDirective],
  imports: [CommonModule],
  exports: [StrikethroughDirective],
})
export class DirectivesModule {}
