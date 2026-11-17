import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapiComponent } from './listapi.component';

describe('ListapiComponent', () => {
  let component: ListapiComponent;
  let fixture: ComponentFixture<ListapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
