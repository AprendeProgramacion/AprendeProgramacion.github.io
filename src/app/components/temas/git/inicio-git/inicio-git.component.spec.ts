import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioGitComponent } from './inicio-git.component';

describe('InicioGitComponent', () => {
  let component: InicioGitComponent;
  let fixture: ComponentFixture<InicioGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioGitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
