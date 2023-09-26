import { EAppEnvironment } from "@environments/environment.model";

import { environmentVars } from "@shared/services/app-initializer/usecases/app-initializer.service";

export const isLocal = (): boolean => environmentVars.APP_ENV === EAppEnvironment.LOCAL;
export const isProduction = (): boolean => environmentVars.APP_ENV === EAppEnvironment.PRODUCTION;
