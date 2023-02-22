import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenge12Component } from './challenge12.component';

describe('Challenge12Component', () => {
  let component: Challenge12Component;
  let fixture: ComponentFixture<Challenge12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challenge12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Challenge12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
