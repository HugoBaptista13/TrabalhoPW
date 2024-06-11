import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu13Component } from './museu13.component';

describe('Museu13Component', () => {
  let component: Museu13Component;
  let fixture: ComponentFixture<Museu13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
