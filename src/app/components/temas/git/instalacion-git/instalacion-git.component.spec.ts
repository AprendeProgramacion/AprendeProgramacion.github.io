import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionGitComponent } from './instalacion-git.component';

describe('InstalacionGitComponent', () => {
  let component: InstalacionGitComponent;
  let fixture: ComponentFixture<InstalacionGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstalacionGitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstalacionGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
