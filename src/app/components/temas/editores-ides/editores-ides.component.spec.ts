import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoresIDESComponent } from './editores-ides.component';

describe('EditoresIDESComponent', () => {
  let component: EditoresIDESComponent;
  let fixture: ComponentFixture<EditoresIDESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoresIDESComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditoresIDESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
