import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationPage } from './collaboration.page';

describe('CollaborationPage', () => {
  let component: CollaborationPage;
  let fixture: ComponentFixture<CollaborationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
