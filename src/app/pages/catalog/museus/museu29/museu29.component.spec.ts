import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu29Component } from './museu29.component';

describe('Museu29Component', () => {
  let component: Museu29Component;
  let fixture: ComponentFixture<Museu29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu29Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
