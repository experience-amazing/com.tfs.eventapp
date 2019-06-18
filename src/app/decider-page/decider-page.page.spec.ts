import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeciderPagePage } from './decider-page.page';

describe('DeciderPagePage', () => {
  let component: DeciderPagePage;
  let fixture: ComponentFixture<DeciderPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeciderPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeciderPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
