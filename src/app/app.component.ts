import { NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterOutlet } from "@angular/router";

import { environmentVars } from "@shared/services/app-initializer/usecases/app-initializer.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [NgIf, RouterOutlet, MatProgressSpinnerModule]
})
export class AppComponent implements OnInit {
  public isAppInitialized = true;

  constructor() {
    console.log(
      "[AppComponent] constructor",
      environmentVars.APP_ENV,
      environmentVars.APP_ENV_VARS_URL,
      environmentVars.APP_UI_ENCRYPTION_KEY,
      environmentVars.APP_UI_PORT
    );
  }

  ngOnInit(): void {}
}
