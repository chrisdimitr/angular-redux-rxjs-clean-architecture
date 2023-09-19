import { Injectable } from "@angular/core";

import { IGenericAppInitializerUseCase } from "@shared/services/app-initializer/usecases/ports/in/IGenericAppInitializerUseCase";

@Injectable({
  providedIn: "root"
})
export class AppInitializerService implements IGenericAppInitializerUseCase {
  constructor() {}

  setRequiredGlobalData(): void {
    console.log("[AppInitializerService] setRequiredGlobalData");
  }

  setRequiredSecuredData(): void {
    console.log("[AppInitializerService] setRequiredSecuredData");
  }
}
