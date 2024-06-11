import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu27Component } from './museu27.component';

describe('Museu27Component', () => {
  let component: Museu27Component;
  let fixture: ComponentFixture<Museu27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu27Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
