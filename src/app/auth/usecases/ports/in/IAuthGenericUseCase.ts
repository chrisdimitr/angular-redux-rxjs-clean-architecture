import { Observable } from "rxjs";

import { AuthUser } from "@app/auth/entities/auth-user.entity";

export interface IAuthGenericUseCase {
  login(): Observable<void>;
  logout(): Observable<void>;
  isAuthenticated(): Observable<boolean>;
  storeAccessToken(): void;
  getAccessToken(): string | null;
  getUser(): Observable<AuthUser | null | undefined>;
}
