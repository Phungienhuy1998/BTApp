import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoipassPage } from './doipass.page';

describe('DoipassPage', () => {
  let component: DoipassPage;
  let fixture: ComponentFixture<DoipassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoipassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoipassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
