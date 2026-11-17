import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApiOwnerComponent } from './list-api-owner.component';

describe('ListApiOwnerComponent', () => {
  let component: ListApiOwnerComponent;
  let fixture: ComponentFixture<ListApiOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListApiOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListApiOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
