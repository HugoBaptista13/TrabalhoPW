import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu12Component } from './museu12.component';

describe('Museu12Component', () => {
  let component: Museu12Component;
  let fixture: ComponentFixture<Museu12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
