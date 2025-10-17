import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticList } from './diagnostic-list';

describe('DiagnosticList', () => {
  let component: DiagnosticList;
  let fixture: ComponentFixture<DiagnosticList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosticList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
