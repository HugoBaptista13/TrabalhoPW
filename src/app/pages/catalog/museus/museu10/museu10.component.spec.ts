import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu10Component } from './museu10.component';

describe('Museu10Component', () => {
  let component: Museu10Component;
  let fixture: ComponentFixture<Museu10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
