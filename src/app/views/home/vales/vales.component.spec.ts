/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ValesComponent } from './vales.component';

describe('ValesComponent', () => {
  let component: ValesComponent;
  let fixture: ComponentFixture<ValesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
