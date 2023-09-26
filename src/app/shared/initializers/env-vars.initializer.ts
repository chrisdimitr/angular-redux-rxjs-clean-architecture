import { IAppEnvironmentInitializerUseCase } from "@shared/services/app-initializer/usecases/ports/in/IAppEnvironmentInitializerUseCase";
import { isLocal } from "@shared/utils/environment.utils";

export const initializeEnvironmentVariablesFactory = (
  appInitializerService: IAppEnvironmentInitializerUseCase
): (() => void) => {
  return () => {
    if (!isLocal()) {
      appInitializerService.loadEnvironmentVariables();
    }
  };
};
