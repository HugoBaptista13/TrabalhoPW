import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu17Component } from './museu17.component';

describe('Museu17Component', () => {
  let component: Museu17Component;
  let fixture: ComponentFixture<Museu17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
