import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu22Component } from './museu22.component';

describe('Museu22Component', () => {
  let component: Museu22Component;
  let fixture: ComponentFixture<Museu22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu22Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
