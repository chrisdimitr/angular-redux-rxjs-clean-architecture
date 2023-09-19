import { Routes } from "@angular/router";

export const authCallbackRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("@app/auth/gateways/view/components/auth-callback.component").then((m) => m.AuthCallbackComponent)
  }
];
