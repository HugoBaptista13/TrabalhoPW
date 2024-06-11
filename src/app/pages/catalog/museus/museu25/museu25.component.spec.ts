import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu25Component } from './museu25.component';

describe('Museu25Component', () => {
  let component: Museu25Component;
  let fixture: ComponentFixture<Museu25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu25Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
