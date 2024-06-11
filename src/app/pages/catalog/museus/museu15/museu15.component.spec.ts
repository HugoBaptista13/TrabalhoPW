import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu15Component } from './museu15.component';

describe('Museu15Component', () => {
  let component: Museu15Component;
  let fixture: ComponentFixture<Museu15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
