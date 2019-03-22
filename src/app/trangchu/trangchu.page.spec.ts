import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangchuPage } from './trangchu.page';

describe('TrangchuPage', () => {
  let component: TrangchuPage;
  let fixture: ComponentFixture<TrangchuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangchuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangchuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
