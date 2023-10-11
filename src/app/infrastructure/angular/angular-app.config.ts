import { provideHttpClient } from "@angular/common/http";
import { APP_INITIALIZER, ApplicationConfig } from "@angular/core";
import {
  PreloadAllModules,
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withPreloading
} from "@angular/router";

import Auth0ConfigModule from "@infra/auth0/auth0-config.module";

import { appRoutes } from "@app/app.routes";

import { initializeEnvironmentVariablesFactory } from "@shared/initializers/env-vars.initializer";
import { AppInitializerService } from "@shared/services/app-initializer/usecases/app-initializer.service";

export const angularAppConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeEnvironmentVariablesFactory,
      multi: true,
      deps: [AppInitializerService]
    },
    provideRouter(appRoutes, withPreloading(PreloadAllModules), withEnabledBlockingInitialNavigation()),
    Auth0ConfigModule
  ]
};
