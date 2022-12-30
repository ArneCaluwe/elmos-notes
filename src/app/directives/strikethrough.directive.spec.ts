import { ElementRef } from '@angular/core';
import { StrikethroughDirective } from './strikethrough.directive';

describe('StrikethroughDirective', () => {
  const el = {};
  it('should create an instance', () => {
    const directive = new StrikethroughDirective(el as ElementRef);
    expect(directive).toBeTruthy();
  });
});
