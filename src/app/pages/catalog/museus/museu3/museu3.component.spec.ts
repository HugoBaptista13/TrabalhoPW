import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu3Component } from './museu3.component';

describe('Museu3Component', () => {
  let component: Museu3Component;
  let fixture: ComponentFixture<Museu3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
