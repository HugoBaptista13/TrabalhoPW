import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu4Component } from './museu4.component';

describe('Museu4Component', () => {
  let component: Museu4Component;
  let fixture: ComponentFixture<Museu4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
