export interface IAppDataInitializerUseCase {
  loadRequiredGlobalData(): void;
  loadRequiredSecuredData(): void;
}
