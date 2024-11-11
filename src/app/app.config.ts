import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { appStore } from './store/app.store';

export const appConfig: ApplicationConfig = {
  providers: [provideStore(appStore),provideZoneChangeDetection({ eventCoalescing: true })]
};
