import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { AppRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(AppRoutes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
};

export class ApplicationConfiguration {
  //public ApiServiceLink: string = 'http://192.168.8.100:5298/api/';
  public ApiServiceLink: string = 'http://3.87.236.212:8080/api/';
  public WebSiteLink: string = 'https://techmindsforge.com/';

  static Get() {
    var acon = new ApplicationConfiguration();
    return acon;
  }
}
