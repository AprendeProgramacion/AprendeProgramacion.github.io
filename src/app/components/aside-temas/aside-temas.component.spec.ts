import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideTemasComponent } from './aside-temas.component';

describe('AsideTemasComponent', () => {
  let component: AsideTemasComponent;
  let fixture: ComponentFixture<AsideTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideTemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
