import { environment } from "@environments/environment";
import { EAppEnvironment } from "@environments/environment.model";

import { IEnvironmentVars } from "@shared/services/app-initializer/domains/environment-vars.domain";
import { environmentVars } from "@shared/services/app-initializer/usecases/app-initializer.service";

export const isLocal = (): boolean => environmentVars.APP_ENV === EAppEnvironment.LOCAL;
export const isProduction = (): boolean => environmentVars.APP_ENV === EAppEnvironment.PRODUCTION;

export const dotEnvDataToEnvironmentVars = (dotEnvData: string): IEnvironmentVars | null => {
  if (!dotEnvData?.length) {
    return null;
  }

  return dotEnvData
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
};
