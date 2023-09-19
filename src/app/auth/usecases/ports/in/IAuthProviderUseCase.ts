import { Observable } from "rxjs";
import { RedirectLoginResult } from "@auth0/auth0-spa-js";
import { AuthProviderCallback } from "@app/auth/domains/AuthProviderCallback";

export interface IAuthProviderUseCase {
  checkCallback(): Observable<RedirectLoginResult<AuthProviderCallback | undefined>>;
}
