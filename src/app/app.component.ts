import { NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterOutlet } from "@angular/router";

import { environment } from "@environments/environment";

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
    console.log("[AppComponent] constructor", environment.APP_ENV, environment.APP_UI_AUTH0_CLIENT_ID);
  }

  ngOnInit(): void {}
}
