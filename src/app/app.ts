import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Patient } from './models/patient.interface';
import { Header } from './components/header/header';
import { PatientDetails } from './components/patient-details/patient-details';
import { DiagnosisHistory } from './components/diagnosis-history/diagnosis-history';
import { LabResults } from './components/lab-results/lab-results';
import { DiagnosticList } from './components/diagnostic-list/diagnostic-list';
import { PatientList } from './components/patient-list/patient-list';
import { Loader } from './components/loader/loader';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    Header,
    PatientDetails,
    DiagnosisHistory,
    LabResults,
    DiagnosticList,
    PatientList,
    Loader,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('health-dashboard');
  private http = inject(HttpClient);

  patients = signal<Patient[]>([]);
  selectedPatient = signal<Patient | null>(null);
  isLoading = signal<boolean>(true);

  ngOnInit() {
    this.loadPatients();
  }

  private loadPatients(): void {
    this.isLoading.set(true);
    this.http
      .get<Patient[]>('https://fedskillstest.coalitiontechnologies.workers.dev', {
        headers: {
          Authorization: 'Basic Y29hbGl0aW9uOnNraWxscy10ZXN0',
        },
      })
      .subscribe({
        next: (data) => {
          console.log(data, 'data');

          this.patients.set(data);
          const jessicaTaylor = data.find((p) => p.name === 'Jessica Taylor');
          if (jessicaTaylor) {
            this.selectedPatient.set(jessicaTaylor);
          }

          setTimeout(() => {
            this.isLoading.set(false);
          }, 500);
        },
        error: (error) => {
          this.isLoading.set(false);
        },
      });
  }

  onPatientSelected(patient: Patient): void {
    this.selectedPatient.set(patient);
  }
}
