import { EAppEnvironment } from "@environments/environment.model";

import { IEnvironmentVars } from "@shared/services/app-initializer/domains/environment-vars.domain";

export const environment: IEnvironmentVars = {
  // SYSTEM
  APP_ENV: EAppEnvironment.LOCAL,
  APP_ENV_VARS_URL: undefined,
  APP_UI_ENCRYPTION_KEY: process.env.APP_UI_ENCRYPTION_KEY, // Set at build time

  // MOCK DATA
  APP_UI_USE_MOCK_SERVER: true,

  // MAIN
  APP_UI_PORT: 4200,
  APP_UI_BASE_URI: "http://localhost:5173",

  // BACKEND
  APP_UI_API_BASE_URI: "http://localhost:5000",

  // TRANSLATIONS
  APP_UI_DEFAULT_LANGUAGE: "en",

  // AUTH0
  APP_UI_AUTH0_DOMAIN: "dev-fslcxu328vsew2fu.eu.auth0.com",
  APP_UI_AUTH0_CLIENT_ID: "3zqANtWa6VJ96I16X5qej8PhoiPcdRP4",
  APP_UI_AUTH0_REDIRECT_URI: "http://localhost:5173/auth-callback"
};
