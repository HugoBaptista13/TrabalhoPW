import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu8Component } from './museu8.component';

describe('Museu8Component', () => {
  let component: Museu8Component;
  let fixture: ComponentFixture<Museu8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
