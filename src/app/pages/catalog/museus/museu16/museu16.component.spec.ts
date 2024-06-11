import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu16Component } from './museu16.component';

describe('Museu16Component', () => {
  let component: Museu16Component;
  let fixture: ComponentFixture<Museu16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
