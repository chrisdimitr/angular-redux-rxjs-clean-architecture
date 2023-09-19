import { Component, OnInit } from "@angular/core";
import { environment } from "../environments/environment";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterOutlet } from "@angular/router";
import { NgIf } from "@angular/common";

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
    console.log("[AppComponent] constructor", environment.APP_UI_AUTH0_CLIENT_ID, environment.APP_ENV);
  }

  ngOnInit(): void {}
}
