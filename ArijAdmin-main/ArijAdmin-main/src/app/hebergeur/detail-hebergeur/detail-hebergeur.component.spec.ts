import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHebergeurComponent } from './detail-hebergeur.component';

describe('DetailHebergeurComponent', () => {
  let component: DetailHebergeurComponent;
  let fixture: ComponentFixture<DetailHebergeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailHebergeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailHebergeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
