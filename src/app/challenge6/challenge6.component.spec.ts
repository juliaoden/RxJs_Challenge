import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenge6Component } from './challenge6.component';

describe('Challenge6Component', () => {
  let component: Challenge6Component;
  let fixture: ComponentFixture<Challenge6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challenge6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Challenge6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
