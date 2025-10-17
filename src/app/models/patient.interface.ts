export interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistory[];
  diagnostic_list: DiagnosticItem[];
  lab_results: LabResult[];
}

export interface DiagnosisHistory {
  month: string;
  year: number;
  blood_pressure: BloodPressure;
  heart_rate: HealthMetric;
  respiratory_rate: HealthMetric;
  temperature: HealthMetric;
}

export interface BloodPressure {
  systolic: HealthMetric;
  diastolic: HealthMetric;
}

export interface HealthMetric {
  value: number;
  levels: string;
}

export interface DiagnosticItem {
  name: string;
  description: string;
  status: string;
}

export interface LabResult {
  test_name: string;
  result: string;
}
