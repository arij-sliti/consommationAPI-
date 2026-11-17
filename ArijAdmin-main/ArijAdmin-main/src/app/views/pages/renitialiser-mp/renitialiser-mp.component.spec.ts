import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenitialiserMpComponent } from './renitialiser-mp.component';

describe('RenitialiserMpComponent', () => {
  let component: RenitialiserMpComponent;
  let fixture: ComponentFixture<RenitialiserMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenitialiserMpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenitialiserMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
