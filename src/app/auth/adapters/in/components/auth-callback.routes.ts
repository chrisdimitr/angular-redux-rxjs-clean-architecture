import { Routes } from "@angular/router";

export const authCallbackRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("@app/auth/adapters/in/components/auth-callback.component").then((m) => m.AuthCallbackComponent)
  }
];
