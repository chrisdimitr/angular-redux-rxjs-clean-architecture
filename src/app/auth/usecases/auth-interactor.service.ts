import { Injectable } from "@angular/core";

import { AuthService } from "@auth0/auth0-angular";
import { RedirectLoginResult } from "@auth0/auth0-spa-js";
import { Observable, take } from "rxjs";

import { AuthProviderCallback } from "@app/auth/entities/auth-provider-Callback.entity";
import { AuthUser } from "@app/auth/entities/auth-user.entity";
import { IAuthGenericUseCase } from "@app/auth/usecases/ports/in/IAuthGenericUseCase";
import { IAuthProviderUseCase } from "@app/auth/usecases/ports/in/IAuthProviderUseCase";

@Injectable({
  providedIn: "root"
})
export class AuthInteractorService implements IAuthGenericUseCase, IAuthProviderUseCase {
  private static readonly AUTH_TOKEN_LOCALSTORAGE_KEY = "authToken";

  constructor(private _authProviderService: AuthService) {}

  login(targetUrl?: string): Observable<void> {
    return this._authProviderService.loginWithRedirect({ appState: { targetUrl: targetUrl } });
  }

  logout(): Observable<void> {
    localStorage.removeItem(AuthInteractorService.AUTH_TOKEN_LOCALSTORAGE_KEY);
    return this._authProviderService.logout();
  }

  isAuthenticated(): Observable<boolean> {
    return this._authProviderService.isAuthenticated$;
  }

  storeAccessToken(): void {
    this._authProviderService.getAccessTokenSilently().subscribe((accessToken: string) => {
      localStorage.setItem(AuthInteractorService.AUTH_TOKEN_LOCALSTORAGE_KEY, accessToken);
    });
  }

  checkCallback(): Observable<RedirectLoginResult<AuthProviderCallback>> {
    // @ts-ignore
    return this._authProviderService.handleRedirectCallback().pipe(
      //filter((callback: RedirectLoginResult<AuthProviderCallback | undefined>) => !!callback?.appState?.targetUrl),
      take(1)
    );
  }

  getAccessToken(): string | null {
    return localStorage.getItem(AuthInteractorService.AUTH_TOKEN_LOCALSTORAGE_KEY);
  }

  getUser(): Observable<AuthUser | null | undefined> {
    return this._authProviderService.user$;
  }
}
