import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museu21Component } from './museu21.component';

describe('Museu21Component', () => {
  let component: Museu21Component;
  let fixture: ComponentFixture<Museu21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museu21Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Museu21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
