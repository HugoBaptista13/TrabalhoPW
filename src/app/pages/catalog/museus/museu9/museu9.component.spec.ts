import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu9Component } from './museu9.component';

describe('Museu9Component', () => {
  let component: Museu9Component;
  let fixture: ComponentFixture<Museu9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
