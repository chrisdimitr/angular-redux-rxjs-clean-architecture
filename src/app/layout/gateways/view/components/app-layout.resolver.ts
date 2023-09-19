import { ResolveFn } from "@angular/router";
import { IGenericAppInitializerUseCase } from "@shared/services/app-initializer/usecases/ports/in/IGenericAppInitializerUseCase";
import { AppInitializerService } from "@shared/services/app-initializer/usecases/app-initializer.service";
import { inject } from "@angular/core";

export const appLayoutResolver: ResolveFn<boolean> = (
  _route,
  _state,
  appInitializerService: IGenericAppInitializerUseCase = inject(AppInitializerService)
) => {
  appInitializerService.setRequiredSecuredData();

  return true;
};
