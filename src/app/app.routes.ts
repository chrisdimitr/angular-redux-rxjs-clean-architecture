import { Routes } from "@angular/router";

import { AnonymousGuard } from "@shared/guards/anonymous/anonymousGuard";
import { SecuredGuard } from "@shared/guards/secured/secured.guard";

import { appLayoutResolver } from "./layout/gateways/view/components/app-layout.resolver";

export const authCallbackPath = "auth-callback";
export const homePath = "";
export const loginPath = "login";

export const appRoutes: Routes = [
  {
    path: homePath,
    canActivate: [SecuredGuard],
    resolve: {
      appLayoutResolver: appLayoutResolver
    },
    loadChildren: () => import("./layout/gateways/view/components/app-layout.routes").then((m) => m.appLayoutRoutes)
  },
  {
    path: loginPath,
    canActivate: [AnonymousGuard],
    loadChildren: () => import("./login/gateways/view/components/login.routes").then((m) => m.loginRoutes)
  },
  {
    path: authCallbackPath,
    canActivate: [AnonymousGuard],
    loadChildren: () => import("./auth/gateways/view/components/auth-callback.routes").then((m) => m.authCallbackRoutes)
  },
  {
    path: "**",
    loadChildren: () =>
      import("./errors/gateways/view/components/NotFoundError404/not-found-error404.module").then(
        (m) => m.NotFoundError404Module
      )
  }
];
