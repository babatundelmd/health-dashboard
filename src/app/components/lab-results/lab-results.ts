import { Component, input } from '@angular/core';
import { LabResult } from '../../models/patient.interface';

@Component({
  selector: 'app-lab-results',
  imports: [],
  templateUrl: './lab-results.html',
  styleUrl: './lab-results.scss'
})
export class LabResults {
   labResults = input.required<any[]>();

}
