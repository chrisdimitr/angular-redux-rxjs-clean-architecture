import { IGenericAppInitializerUseCase } from "@shared/services/app-initializer/usecases/ports/in/IGenericAppInitializerUseCase";

export const initializeRequiredGlobalDataFactory = (
  appInitializerService: IGenericAppInitializerUseCase
): (() => void) => {
  return () => appInitializerService.setRequiredGlobalData();
};
