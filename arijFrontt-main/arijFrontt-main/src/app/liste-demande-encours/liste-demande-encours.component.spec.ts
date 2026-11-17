import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeEncoursComponent } from './liste-demande-encours.component';

describe('ListeDemandeEncoursComponent', () => {
  let component: ListeDemandeEncoursComponent;
  let fixture: ComponentFixture<ListeDemandeEncoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemandeEncoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDemandeEncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
