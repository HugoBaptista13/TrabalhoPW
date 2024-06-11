import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu23Component } from './museu23.component';

describe('Museu23Component', () => {
  let component: Museu23Component;
  let fixture: ComponentFixture<Museu23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu23Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
