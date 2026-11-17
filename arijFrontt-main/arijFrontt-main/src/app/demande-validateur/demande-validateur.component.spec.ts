import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeValidateurComponent } from './demande-validateur.component';

describe('DemandeValidateurComponent', () => {
  let component: DemandeValidateurComponent;
  let fixture: ComponentFixture<DemandeValidateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeValidateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeValidateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
