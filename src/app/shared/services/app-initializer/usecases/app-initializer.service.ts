import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, from, of, switchMap, tap } from "rxjs";

import { environment } from "@environments/environment";

import { IEnvironmentVars } from "@shared/services/app-initializer/domains/environment-vars.domain";
import { IAppDataInitializerUseCase } from "@shared/services/app-initializer/usecases/ports/in/IAppDataInitializerUseCase";
import { IAppEnvironmentInitializerUseCase } from "@shared/services/app-initializer/usecases/ports/in/IAppEnvironmentInitializerUseCase";
import { pgpDecryptor } from "@shared/utils/encryption.utils";
import { dotEnvDataToEnvironmentVars } from "@shared/utils/environment.utils";

export let environmentVars: IEnvironmentVars = environment;

@Injectable({
  providedIn: "root"
})
export class AppInitializerService implements IAppDataInitializerUseCase, IAppEnvironmentInitializerUseCase {
  constructor(private _httpClient: HttpClient) {}

  loadRequiredGlobalData(): void {
    console.log("[AppInitializerService] loadRequiredGlobalData");
  }

  loadRequiredSecuredData(): void {
    console.log("[AppInitializerService] loadRequiredSecuredData");
  }

  loadEnvironmentVariables(): Observable<string | null> {
    if (!environmentVars.APP_ENV_VARS_URL || !environmentVars.APP_UI_ENCRYPTION_KEY) {
      return of(null);
    }

    console.log("[AppInitializerService] loadEnvironmentVariables");

    return this._httpClient.get(environmentVars.APP_ENV_VARS_URL, { responseType: "text" }).pipe(
      switchMap((encryptedDotEnvVarsData: string) =>
        from(pgpDecryptor(encryptedDotEnvVarsData, environmentVars.APP_UI_ENCRYPTION_KEY as string))
      ),
      tap((decryptedEnvVarsData) => {
        //console.log("[AppInitializerService] dotEnvData: ", decryptedEnvVarsData);

        if (decryptedEnvVarsData) {
          environmentVars = dotEnvDataToEnvironmentVars(decryptedEnvVarsData) || environment;
        }
      })
    );
  }
}
