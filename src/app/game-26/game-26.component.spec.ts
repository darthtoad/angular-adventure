import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game26Component } from './game-26.component';

describe('Game26Component', () => {
  let component: Game26Component;
  let fixture: ComponentFixture<Game26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
