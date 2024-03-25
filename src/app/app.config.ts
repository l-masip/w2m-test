import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { routes } from './app.routes';
import { InMemoryDataService } from './in-memory-data.service';
import { loaderInterceptor } from './interceptors/loader.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    // provideHttpClient(withFetch()),
    provideHttpClient(withInterceptors([loaderInterceptor])), // Without fetch or InMemory will not work
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        delay: 500,
        // apiBase: 'api',
        dataEncapsulation: false,
        passThruUnknownUrl: true,
      })
    ),
    provideRouter(routes, withComponentInputBinding()), // IMPORTANT! Do not put before InMemoryWebApiModule
    provideAnimationsAsync(),
  ],
};
