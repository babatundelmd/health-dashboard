import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { API_CONFIG } from './config/api.config';

export const appConfig: ApplicationConfig = {
  providers: [
       {
      provide: API_CONFIG,
      useValue: {
        baseUrl: 'https://fedskillstest.coalitiontechnologies.workers.dev',
        authToken: 'Basic Y29hbGl0aW9uOnNraWxscy10ZXN0'
      }
    },
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withFetch())
  ]
};
