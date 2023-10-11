import { Routes } from "@angular/router";

export const siteOverviewRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("@app/site-overview/adapters/in/components/site-overview.component").then((m) => m.SiteOverviewComponent)
  }
];
