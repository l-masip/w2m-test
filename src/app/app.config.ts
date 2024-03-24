import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    // provideHttpClient(withFetch()),
    provideHttpClient(), // Without fetch or InMemory will not work
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        delay: 1500,
        // apiBase: 'api',
        dataEncapsulation: false,
        passThruUnknownUrl: true,
      }),
      ),
    provideRouter(routes, withComponentInputBinding()), // IMPORTANT! Do not put before InMemoryWebApiModule
    provideAnimationsAsync(),
  ],
};
