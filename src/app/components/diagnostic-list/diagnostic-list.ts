import { Component, input } from '@angular/core';
import { DiagnosticItem } from '../../models/patient.interface';

@Component({
  selector: 'app-diagnostic-list',
  imports: [],
  templateUrl: './diagnostic-list.html',
  styleUrl: './diagnostic-list.scss'
})
export class DiagnosticList {
   diagnosticList = input.required<DiagnosticItem[]>();

}
