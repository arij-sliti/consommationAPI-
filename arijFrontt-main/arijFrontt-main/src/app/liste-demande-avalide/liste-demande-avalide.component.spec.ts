import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeAvalideComponent } from './liste-demande-avalide.component';

describe('ListeDemandeAvalideComponent', () => {
  let component: ListeDemandeAvalideComponent;
  let fixture: ComponentFixture<ListeDemandeAvalideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemandeAvalideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDemandeAvalideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
