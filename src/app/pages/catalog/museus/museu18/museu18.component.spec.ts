import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu18Component } from './museu18.component';

describe('Museu18Component', () => {
  let component: Museu18Component;
  let fixture: ComponentFixture<Museu18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu18Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
