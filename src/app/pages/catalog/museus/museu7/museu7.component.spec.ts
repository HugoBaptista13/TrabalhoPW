import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu7Component } from './museu7.component';

describe('Museu7Component', () => {
  let component: Museu7Component;
  let fixture: ComponentFixture<Museu7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
