import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichthiPage } from './lichthi.page';

describe('LichthiPage', () => {
  let component: LichthiPage;
  let fixture: ComponentFixture<LichthiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichthiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichthiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
