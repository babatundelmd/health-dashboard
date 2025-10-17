import { Component, input, output } from '@angular/core';
import { Patient } from '../../models/patient.interface';

@Component({
  selector: 'app-patient-list',
  imports: [],
  templateUrl: './patient-list.html',
  styleUrl: './patient-list.scss',
})
export class PatientList {
  patients = input.required<Patient[]>();
  selectedPatient = input<Patient | null>(null);
  patientSelected = output<Patient>();

  onSelect(patient: Patient): void {
    this.patientSelected.emit(patient);
  }
}
