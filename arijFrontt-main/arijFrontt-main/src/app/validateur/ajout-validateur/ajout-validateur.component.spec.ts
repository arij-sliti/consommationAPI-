import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutValidateurComponent } from './ajout-validateur.component';

describe('AjoutValidateurComponent', () => {
  let component: AjoutValidateurComponent;
  let fixture: ComponentFixture<AjoutValidateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutValidateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutValidateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
