import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetquaPage } from './ketqua.page';

describe('KetquaPage', () => {
  let component: KetquaPage;
  let fixture: ComponentFixture<KetquaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetquaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetquaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
