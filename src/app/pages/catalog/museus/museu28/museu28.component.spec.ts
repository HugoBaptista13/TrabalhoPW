import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu28Component } from './museu28.component';

describe('Museu28Component', () => {
  let component: Museu28Component;
  let fixture: ComponentFixture<Museu28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu28Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
