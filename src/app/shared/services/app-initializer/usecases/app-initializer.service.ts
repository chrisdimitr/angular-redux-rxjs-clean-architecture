import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "@environments/environment";

import { IEnvironmentVars } from "@shared/services/app-initializer/domains/environment-vars.domain";
import { IAppDataInitializerUseCase } from "@shared/services/app-initializer/usecases/ports/in/IAppDataInitializerUseCase";
import { IAppEnvironmentInitializerUseCase } from "@shared/services/app-initializer/usecases/ports/in/IAppEnvironmentInitializerUseCase";
import { aesUtf8Decryptor } from "@shared/utils/encryption.utils";

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

  loadEnvironmentVariables(): void {
    if (!environmentVars.APP_ENV_VARS_URL || !environmentVars.APP_UI_ENCRYPTION_KEY) {
      return;
    }

    console.log("[AppInitializerService] loadEnvironmentVariables");

    this._httpClient
      .get(environmentVars.APP_ENV_VARS_URL, { responseType: "text" })
      .pipe()
      .subscribe((dotEnvVarsData) => {
        //console.log("[AppInitializerService] dotEnvData: ", dotEnvVarsData);
        const decryptedEnvVarsData = aesUtf8Decryptor(dotEnvVarsData, environmentVars.APP_UI_ENCRYPTION_KEY as string);

        if (decryptedEnvVarsData) {
          environmentVars = decryptedEnvVarsData
            .split("\n")
            .filter((line: string) => !line.startsWith("#"))
            .reduce((acc: IEnvironmentVars, cur) => {
              const keyValue = cur.split("=");

              if (keyValue.length === 2) {
                // @ts-ignore
                acc[keyValue[0].trim()] = keyValue[1].trim();
              }

              return acc;
            }, environment);
        }
      });
  }
}
