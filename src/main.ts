import { bootstrapApplication } from "@angular/platform-browser";

import { angularAppConfig } from "@infra/angular/angular-app.config";

import { AppComponent } from "@app/app.component";

bootstrapApplication(AppComponent, angularAppConfig).catch((err) => console.error(err));
