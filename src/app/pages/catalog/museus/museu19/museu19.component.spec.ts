import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu19Component } from './museu19.component';

describe('Museu19Component', () => {
  let component: Museu19Component;
  let fixture: ComponentFixture<Museu19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu19Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
