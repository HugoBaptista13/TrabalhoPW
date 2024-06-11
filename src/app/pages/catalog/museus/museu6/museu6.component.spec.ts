import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu6Component } from './museu6.component';

describe('Museu6Component', () => {
  let component: Museu6Component;
  let fixture: ComponentFixture<Museu6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
