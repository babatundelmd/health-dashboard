# Tech.Care Patient Dashboard

Angular 20 application for patient health management dashboard.

## Installation

```bash
npm install
```

## Development

```bash
ng serve
```

Navigate to `http://localhost:4200/`

## Build

```bash
ng build --configuration production
```

Build files will be in `dist/tech-care-dashboard/`

## Features

- Standalone components (Angular 20+)
- Signals for state management
- Chart.js for blood pressure visualization
- Responsive design
- API integration with Basic Auth

## API

- **Endpoint**: https://fedskillstest.coalitiontechnologies.workers.dev

## Technologies

- Angular 20
- TypeScript 5.4
- Chart.js 4.4
- SCSS
- RxJS 7.8

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── patient-list/
│   │   ├── diagnosis-history/
│   │   ├── patient-details/
│   │   ├── diagnostic-list/
│   │   ├── lab-results/
│   │   └── loader/
│   ├── models/
│   │   └── patient.interface.ts
│   ├── app.component.ts
│   └── app.config.ts
├── styles.scss
└── main.ts
```
