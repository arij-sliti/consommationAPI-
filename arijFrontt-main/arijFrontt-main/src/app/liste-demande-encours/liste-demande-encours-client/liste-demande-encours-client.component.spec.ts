import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeEncoursClientComponent } from './liste-demande-encours-client.component';

describe('ListeDemandeEncoursClientComponent', () => {
  let component: ListeDemandeEncoursClientComponent;
  let fixture: ComponentFixture<ListeDemandeEncoursClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemandeEncoursClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDemandeEncoursClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
