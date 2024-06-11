import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu5Component } from './museu5.component';

describe('Museu5Component', () => {
  let component: Museu5Component;
  let fixture: ComponentFixture<Museu5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
