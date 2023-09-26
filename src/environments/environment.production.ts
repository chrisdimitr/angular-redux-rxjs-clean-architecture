import { EAppEnvironment } from "@environments/environment.model";

import { IEnvironmentVars } from "@shared/services/app-initializer/domains/environment-vars.domain";

export const environment: IEnvironmentVars = {
  // SYSTEM
  APP_ENV: EAppEnvironment.PRODUCTION,
  APP_ENV_VARS_URL: "assets/env/.env.production",
  APP_UI_ENCRYPTION_KEY: process.env.APP_UI_ENCRYPTION_KEY, // Set at build time

  // MOCK DATA
  APP_UI_USE_MOCK_SERVER: false,

  // MAIN
  APP_UI_PORT: undefined, // Set at runtime by retrieving 'APP_ENV_VARS_URL' file
  APP_UI_BASE_URI: undefined, // Set at runtime by retrieving 'APP_ENV_VARS_URL' file

  // BACKEND
  APP_UI_API_BASE_URI: undefined, // Set at runtime by retrieving 'APP_ENV_VARS_URL' file

  // TRANSLATIONS
  APP_UI_DEFAULT_LANGUAGE: undefined, // Set at runtime by retrieving 'APP_ENV_VARS_URL' file

  // AUTH0
  APP_UI_AUTH0_DOMAIN: undefined, // Set at runtime by retrieving 'APP_ENV_VARS_URL' file
  APP_UI_AUTH0_CLIENT_ID: undefined, // Set at runtime by retrieving 'APP_ENV_VARS_URL' file
  APP_UI_AUTH0_REDIRECT_URI: undefined // Set at runtime by retrieving 'APP_ENV_VARS_URL' file
};
