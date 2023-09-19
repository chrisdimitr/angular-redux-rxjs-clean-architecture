import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: "app-login-toolbar",
  templateUrl: "./login-toolbar.component.html",
  styleUrls: ["./login-toolbar.component.scss"],
  standalone: true,
  imports: [MatToolbarModule, RouterLink]
})
export class LoginToolbarComponent {}
