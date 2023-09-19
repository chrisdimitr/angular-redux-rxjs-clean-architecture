import { CanActivateFn } from "@angular/router";

export const SecuredGuard: CanActivateFn = () => {
  //const authInteractorService = inject(AuthInteractorService);
  return true;
};
