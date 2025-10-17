import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabResults } from './lab-results';

describe('LabResults', () => {
  let component: LabResults;
  let fixture: ComponentFixture<LabResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
