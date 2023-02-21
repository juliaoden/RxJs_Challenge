import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenge4Component } from './challenge4.component';

describe('Challenge4Component', () => {
  let component: Challenge4Component;
  let fixture: ComponentFixture<Challenge4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challenge4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Challenge4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
