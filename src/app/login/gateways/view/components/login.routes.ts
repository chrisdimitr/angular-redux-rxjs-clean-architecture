import { Routes } from "@angular/router";

export const loginRoutes: Routes = [
  {
    path: "",
    loadComponent: () => import("@app/login/gateways/view/components/login.component").then((m) => m.LoginComponent)
  }
];
