import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenge11Component } from './challenge11.component';

describe('Challenge11Component', () => {
  let component: Challenge11Component;
  let fixture: ComponentFixture<Challenge11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challenge11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Challenge11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
