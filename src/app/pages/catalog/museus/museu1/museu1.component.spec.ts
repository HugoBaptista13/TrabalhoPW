import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu1Component } from './museu1.component';

describe('Museu1Component', () => {
  let component: Museu1Component;
  let fixture: ComponentFixture<Museu1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
