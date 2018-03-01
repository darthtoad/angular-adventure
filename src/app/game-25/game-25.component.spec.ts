import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game25Component } from './game-25.component';

describe('Game25Component', () => {
  let component: Game25Component;
  let fixture: ComponentFixture<Game25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
