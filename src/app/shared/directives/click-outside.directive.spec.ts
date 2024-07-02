import { TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ClickOutsideDirective } from './click-outside.directive';

describe('ClickOutsideDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClickOutsideDirective,
        { provide: ElementRef, useValue: { nativeElement: document.createElement('div') } },
        { provide: DOCUMENT, useValue: document }
      ]
    });
  });

  it('should create an instance', () => {
    const directive = TestBed.inject(ClickOutsideDirective);
    expect(directive).toBeTruthy();
  });
});
