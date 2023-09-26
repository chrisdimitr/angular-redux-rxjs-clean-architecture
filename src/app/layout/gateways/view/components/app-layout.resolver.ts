import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";

import { AppInitializerService } from "@shared/services/app-initializer/usecases/app-initializer.service";
import { IAppDataInitializerUseCase } from "@shared/services/app-initializer/usecases/ports/in/IAppDataInitializerUseCase";

export const appLayoutResolver: ResolveFn<boolean> = (
  _route,
  _state,
  appInitializerService: IAppDataInitializerUseCase = inject(AppInitializerService)
) => {
  appInitializerService.loadRequiredSecuredData();

  return true;
};
