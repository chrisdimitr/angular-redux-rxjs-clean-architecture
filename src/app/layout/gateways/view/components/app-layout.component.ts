import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { AppFooterComponent } from "./footer/app-footer.component";
import { AppHeaderComponent } from "./header/app-header.component";

@Component({
  selector: "app-layout",
  templateUrl: "./app-layout.component.html",
  styleUrls: ["./app-layout.component.scss"],
  standalone: true,
  imports: [AppHeaderComponent, RouterOutlet, AppFooterComponent]
})
export class AppLayoutComponent implements OnInit {
  constructor() {
    console.log("[AppLayoutComponent] constructor");
  }

  ngOnInit(): void {}
}
