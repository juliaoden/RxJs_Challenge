import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenge7Component } from './challenge7.component';

describe('Challenge7Component', () => {
  let component: Challenge7Component;
  let fixture: ComponentFixture<Challenge7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challenge7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Challenge7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
