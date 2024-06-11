import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu20Component } from './museu20.component';

describe('Museu20Component', () => {
  let component: Museu20Component;
  let fixture: ComponentFixture<Museu20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu20Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
