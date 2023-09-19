import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "@app/app.component";

import { angularAppConfig } from "@config/angular/angular-app.config";

bootstrapApplication(AppComponent, angularAppConfig).catch((err) => console.error(err));
