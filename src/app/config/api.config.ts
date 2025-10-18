import { InjectionToken } from "@angular/core";

export interface ApiConfig {
  baseUrl: string;
  authToken: string;
}
export const API_CONFIG = new InjectionToken<ApiConfig>('api.config');
