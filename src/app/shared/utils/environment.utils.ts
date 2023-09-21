import { environment } from "@environments/environment";
import { EAppEnvironment } from "@environments/environment.model";

export const isLocal = (): boolean => environment.APP_ENV === EAppEnvironment.LOCAL;
export const isProduction = (): boolean => environment.APP_ENV === EAppEnvironment.PRODUCTION;
