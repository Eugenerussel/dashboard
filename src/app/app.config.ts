import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     {
      provide: 'AuthService',
      useFactory: () => 
        loadRemoteModule({
          remoteEntry: 'http://localhost:8080/remoteEntry.js',
          remoteName: 'host-app',
          exposedModule: './AuthService'
        }).then(m => new m.AuthService()),
    },]
};
