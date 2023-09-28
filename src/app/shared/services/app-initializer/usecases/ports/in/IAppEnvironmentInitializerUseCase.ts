import { Observable } from "rxjs";

export interface IAppEnvironmentInitializerUseCase {
  loadEnvironmentVariables(): Observable<string | null>;
}
