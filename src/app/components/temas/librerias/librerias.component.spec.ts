import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriasComponent } from './librerias.component';

describe('LibreriasComponent', () => {
  let component: LibreriasComponent;
  let fixture: ComponentFixture<LibreriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibreriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibreriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
