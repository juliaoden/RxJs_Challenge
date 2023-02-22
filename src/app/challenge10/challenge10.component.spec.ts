import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenge10Component } from './challenge10.component';

describe('Challenge10Component', () => {
  let component: Challenge10Component;
  let fixture: ComponentFixture<Challenge10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challenge10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Challenge10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
