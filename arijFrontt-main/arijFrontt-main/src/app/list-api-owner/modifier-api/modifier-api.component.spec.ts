import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierApiComponent } from './modifier-api.component';

describe('ModifierApiComponent', () => {
  let component: ModifierApiComponent;
  let fixture: ComponentFixture<ModifierApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
