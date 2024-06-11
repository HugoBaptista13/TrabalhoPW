import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu26Component } from './museu26.component';

describe('Museu26Component', () => {
  let component: Museu26Component;
  let fixture: ComponentFixture<Museu26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu26Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
