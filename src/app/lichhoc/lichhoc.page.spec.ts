import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichhocPage } from './lichhoc.page';

describe('LichhocPage', () => {
  let component: LichhocPage;
  let fixture: ComponentFixture<LichhocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichhocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichhocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
