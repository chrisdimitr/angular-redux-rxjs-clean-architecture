import { EAppEnvironment } from "@environments/environment.model";

export const environment = {
  // SYSTEM
  APP_ENV: EAppEnvironment.PRODUCTION,

  // MAIN
  APP_UI_PORT: process.env.APP_UI_PORT,
  APP_UI_BASE_URI: process.env.APP_UI_BASE_URI,

  // BACKEND API
  APP_UI_API_BASE_URI: process.env.APP_UI_API_BASE_URI,

  // Auth0 Variables
  APP_UI_AUTH0_DOMAIN: process.env.APP_UI_AUTH0_DOMAIN,
  APP_UI_AUTH0_CLIENT_ID: process.env.APP_UI_AUTH0_CLIENT_ID,
  APP_UI_AUTH0_REDIRECT_URI: process.env.APP_UI_AUTH0_REDIRECT_URI
};
