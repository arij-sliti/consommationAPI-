import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demandeacceptervalidateur2Component } from './demandeacceptervalidateur2.component';

describe('Demandeacceptervalidateur2Component', () => {
  let component: Demandeacceptervalidateur2Component;
  let fixture: ComponentFixture<Demandeacceptervalidateur2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demandeacceptervalidateur2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demandeacceptervalidateur2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
