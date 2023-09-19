import { CanActivateFn } from "@angular/router";

export const AnonymousGuard: CanActivateFn = () => {
  return true;
};
