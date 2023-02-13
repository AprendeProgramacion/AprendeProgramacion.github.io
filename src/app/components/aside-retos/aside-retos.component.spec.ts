import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideRetosComponent } from './aside-retos.component';

describe('AsideRetosComponent', () => {
  let component: AsideRetosComponent;
  let fixture: ComponentFixture<AsideRetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideRetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideRetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
