import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu11Component } from './museu11.component';

describe('Museu11Component', () => {
  let component: Museu11Component;
  let fixture: ComponentFixture<Museu11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
