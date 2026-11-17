import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenitialiserMPComponent } from './renitialiser-mp.component';

describe('RenitialiserMPComponent', () => {
  let component: RenitialiserMPComponent;
  let fixture: ComponentFixture<RenitialiserMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenitialiserMPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenitialiserMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
