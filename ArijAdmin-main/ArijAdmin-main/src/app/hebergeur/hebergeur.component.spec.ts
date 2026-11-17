import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebergeurComponent } from './hebergeur.component';

describe('HebergeurComponent', () => {
  let component: HebergeurComponent;
  let fixture: ComponentFixture<HebergeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HebergeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HebergeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
