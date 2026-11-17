import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierValidateurComponent } from './modifier-validateur.component';

describe('ModifierValidateurComponent', () => {
  let component: ModifierValidateurComponent;
  let fixture: ComponentFixture<ModifierValidateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierValidateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierValidateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
