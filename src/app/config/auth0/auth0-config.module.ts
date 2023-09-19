import { NgModule } from "@angular/core";

import { AuthModule } from "@auth0/auth0-angular";
import { CacheLocation } from "@auth0/auth0-spa-js/src/global";

import { environment } from "@environments/environment";

export const auth0Config = {
  domain: environment.APP_UI_AUTH0_DOMAIN as string,
  clientId: environment.APP_UI_AUTH0_CLIENT_ID as string,
  useRefreshTokens: true, // true: refresh tokens are used to fetch new access tokens from the Auth0 server
  cacheLocation: "localstorage" as CacheLocation,
  authorizationParams: {
    redirect_uri: environment.APP_UI_AUTH0_REDIRECT_URI
  }
};

@NgModule({
  imports: [AuthModule.forRoot(auth0Config)]
})
export default class Auth0ConfigModule {}
