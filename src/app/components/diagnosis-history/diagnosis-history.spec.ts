import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisHistory } from './diagnosis-history';

describe('DiagnosisHistory', () => {
  let component: DiagnosisHistory;
  let fixture: ComponentFixture<DiagnosisHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosisHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosisHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
