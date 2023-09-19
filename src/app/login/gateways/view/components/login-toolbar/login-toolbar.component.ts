import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-login-toolbar",
  templateUrl: "./login-toolbar.component.html",
  styleUrls: ["./login-toolbar.component.scss"],
  standalone: true,
  imports: [MatToolbarModule, RouterLink]
})
export class LoginToolbarComponent {}
