import { Routes } from "@angular/router";

import { AnonymousGuard } from "@shared/guards/anonymous/anonymousGuard";
import { SecuredGuard } from "@shared/guards/secured/secured.guard";

import { appLayoutResolver } from "./layout/adapters/in/components/app-layout.resolver";

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
    loadChildren: () => import("./layout/adapters/in/components/app-layout.routes").then((m) => m.appLayoutRoutes)
  },
  {
    path: loginPath,
    canActivate: [AnonymousGuard],
    loadChildren: () => import("./login/adapters/in/components/login.routes").then((m) => m.loginRoutes)
  },
  {
    path: authCallbackPath,
    canActivate: [AnonymousGuard],
    loadChildren: () =>
      import("@app/auth/adapters/in/components/auth-callback.routes").then((m) => m.authCallbackRoutes)
  },
  {
    path: "**",
    loadChildren: () =>
      import("@app/errors/adapters/in/components/NotFoundError404/not-found-error404.module").then(
        (m) => m.NotFoundError404Module
      )
  }
];
