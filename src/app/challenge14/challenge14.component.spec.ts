import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenge14Component } from './challenge14.component';

describe('Challenge14Component', () => {
  let component: Challenge14Component;
  let fixture: ComponentFixture<Challenge14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challenge14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Challenge14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
