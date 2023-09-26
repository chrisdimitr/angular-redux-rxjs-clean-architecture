export interface IEnvironmentVars extends IExtEnvironmentVars {
  APP_ENV: string;
  APP_ENV_VARS_URL?: string;
  APP_UI_ENCRYPTION_KEY?: string;
  APP_UI_USE_MOCK_SERVER: boolean;
}

export interface IExtEnvironmentVars {
  APP_UI_PORT?: number;
  APP_UI_BASE_URI?: string;
  APP_UI_API_BASE_URI?: string;
  APP_UI_DEFAULT_LANGUAGE?: string;
  APP_UI_AUTH0_DOMAIN?: string;
  APP_UI_AUTH0_CLIENT_ID?: string;
  APP_UI_AUTH0_REDIRECT_URI?: string;
}
