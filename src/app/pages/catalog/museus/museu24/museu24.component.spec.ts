import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu24Component } from './museu24.component';

describe('Museu24Component', () => {
  let component: Museu24Component;
  let fixture: ComponentFixture<Museu24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu24Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
