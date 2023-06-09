import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalBasicaGitComponent } from './terminal-basica-git.component';

describe('TerminalBasicaGitComponent', () => {
  let component: TerminalBasicaGitComponent;
  let fixture: ComponentFixture<TerminalBasicaGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalBasicaGitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalBasicaGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
