import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeTermineComponent } from './liste-demande-termine.component';

describe('ListeDemandeTermineComponent', () => {
  let component: ListeDemandeTermineComponent;
  let fixture: ComponentFixture<ListeDemandeTermineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemandeTermineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDemandeTermineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
