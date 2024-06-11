import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu14Component } from './museu14.component';

describe('Museu14Component', () => {
  let component: Museu14Component;
  let fixture: ComponentFixture<Museu14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
