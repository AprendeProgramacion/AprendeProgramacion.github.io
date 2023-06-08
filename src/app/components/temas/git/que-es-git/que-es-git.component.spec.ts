import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEsGitComponent } from './que-es-git.component';

describe('QueEsGitComponent', () => {
  let component: QueEsGitComponent;
  let fixture: ComponentFixture<QueEsGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueEsGitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueEsGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
