import {
  afterNextRender,
  Component,
  computed,
  effect,
  ElementRef,
  input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Patient } from '../../models/patient.interface';
Chart.register(...registerables);

@Component({
  selector: 'app-diagnosis-history',
  imports: [],
  templateUrl: './diagnosis-history.html',
  styleUrl: './diagnosis-history.scss',
})
export class DiagnosisHistory{
   patient = input.required<Patient>();
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart: Chart | null = null;

  latestSystolic = computed(() => {
    const history = this.patient()?.diagnosis_history;
    if (!history || history.length === 0) return 0;
    return history[history.length - 1].blood_pressure.systolic.value;
  });

  latestDiastolic = computed(() => {
    const history = this.patient()?.diagnosis_history;
    if (!history || history.length === 0) return 0;
    return history[history.length - 1].blood_pressure.diastolic.value;
  });

  latestRespiratoryRate = computed(() => {
    const history = this.patient()?.diagnosis_history;
    if (!history || history.length === 0) return 0;
    return history[history.length - 1].respiratory_rate.value;
  });

  respiratoryStatus = computed(() => {
    const history = this.patient()?.diagnosis_history;
    if (!history || history.length === 0) return '';
    return history[history.length - 1].respiratory_rate.levels;
  });

  latestTemperature = computed(() => {
    const history = this.patient()?.diagnosis_history;
    if (!history || history.length === 0) return 0;
    return history[history.length - 1].temperature.value;
  });

  temperatureStatus = computed(() => {
    const history = this.patient()?.diagnosis_history;
    if (!history || history.length === 0) return '';
    return history[history.length - 1].temperature.levels;
  });

  latestHeartRate = computed(() => {
    const history = this.patient()?.diagnosis_history;
    if (!history || history.length === 0) return 0;
    return history[history.length - 1].heart_rate.value;
  });

  heartRateStatus = computed(() => {
    const history = this.patient()?.diagnosis_history;
    if (!history || history.length === 0) return '';
    return history[history.length - 1].heart_rate.levels;
  });

  constructor() {
    afterNextRender(() => {
      setTimeout(() => {
        this.initChart();
      }, 100);
    });

    effect(() => {
      const patient = this.patient();
      if (patient && this.chart) {
        this.updateChart();
      }
    });
  }

  private initChart(): void {
    if (!this.chartCanvas) return;

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const history = this.patient()?.diagnosis_history || [];
    const last6Months = history.slice(-6);

    const labels = last6Months.map(h => `${h.month.substring(0, 3)}, ${h.year}`);
    const systolicData = last6Months.map(h => h.blood_pressure.systolic.value);
    const diastolicData = last6Months.map(h => h.blood_pressure.diastolic.value);

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Systolic',
            data: systolicData,
            borderColor: '#E66FD2',
            backgroundColor: 'rgba(230, 111, 210, 0.1)',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 6,
            pointBackgroundColor: '#E66FD2',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointHoverRadius: 8,
          },
          {
            label: 'Diastolic',
            data: diastolicData,
            borderColor: '#8C6FE6',
            backgroundColor: 'rgba(140, 111, 230, 0.1)',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 6,
            pointBackgroundColor: '#8C6FE6',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointHoverRadius: 8,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            titleColor: '#072635',
            bodyColor: '#072635',
            borderColor: '#E0E0E0',
            borderWidth: 1,
            padding: 12,
            displayColors: true,
            boxPadding: 6,
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            min: 60,
            max: 180,
            ticks: {
              stepSize: 20,
              font: {
                family: 'Manrope',
                size: 12
              },
              color: '#072635'
            },
            grid: {
              color: 'rgba(203, 200, 212, 0.3)',
            }
          },
          x: {
            ticks: {
              font: {
                family: 'Manrope',
                size: 12
              },
              color: '#072635'
            },
            grid: {
              display: false,
            }
          }
        }
      }
    });
  }

  private updateChart(): void {
    if (!this.chart) return;
    const history = this.patient()?.diagnosis_history || [];
    const last6Months = history.slice(-6);

    const labels = last6Months.map(h => `${h.month.substring(0, 3)}, ${h.year}`);
    const systolicData = last6Months.map(h => h.blood_pressure.systolic.value);
    const diastolicData = last6Months.map(h => h.blood_pressure.diastolic.value);
    this.chart.data.labels = labels;
    this.chart.data.datasets[0].data = systolicData;
    this.chart.data.datasets[1].data = diastolicData;
    this.chart.update();
  }
}
