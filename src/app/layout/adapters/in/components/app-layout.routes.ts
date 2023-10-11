import { Routes } from "@angular/router";

import { AppLayoutComponent } from "@app/layout/adapters/in/components/app-layout.component";

export const enterpriseOverviewPath = "enterprise-overview";
export const siteOverviewPath = "site-overview/:siteId";

export const appLayoutRoutes: Routes = [
  {
    path: "",
    component: AppLayoutComponent,
    children: [
      {
        path: enterpriseOverviewPath,
        loadChildren: () =>
          import("@app/enterprise-overview/adapters/in/components/enterprise-overview.routes").then(
            (m) => m.enterpriseOverviewRoutes
          )
      },
      {
        path: siteOverviewPath,
        loadChildren: () =>
          import("@app/site-overview/adapters/in/components/site-overview.routes").then((m) => m.siteOverviewRoutes)
      }
    ]
  }
];
