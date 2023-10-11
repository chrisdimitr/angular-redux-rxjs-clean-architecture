import { Routes } from "@angular/router";

export const loginRoutes: Routes = [
  {
    path: "",
    loadComponent: () => import("@app/login/adapters/in/components/login.component").then((m) => m.LoginComponent)
  }
];
