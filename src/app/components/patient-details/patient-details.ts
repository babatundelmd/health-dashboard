import { Component, input } from '@angular/core';
import { Patient } from '../../models/patient.interface';

@Component({
  selector: 'app-patient-details',
  imports: [],
  templateUrl: './patient-details.html',
  styleUrl: './patient-details.scss'
})
export class PatientDetails {
  patient = input.required<Patient>();
}
