import { IAppDataInitializerUseCase } from "@shared/services/app-initializer/usecases/ports/in/IAppDataInitializerUseCase";

export const initializeRequiredGlobalDataFactory = (
  appInitializerService: IAppDataInitializerUseCase
): (() => void) => {
  return () => appInitializerService.loadRequiredGlobalData();
};
