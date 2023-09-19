import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { appRoutes } from "@app/app.routes";
import Auth0ConfigModule from "@config/auth0/auth0-config.module";

export const angularAppConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideHttpClient(), Auth0ConfigModule]
};
