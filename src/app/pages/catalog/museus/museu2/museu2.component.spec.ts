import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu2Component } from './museu2.component';

describe('Museu2Component', () => {
  let component: Museu2Component;
  let fixture: ComponentFixture<Museu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
