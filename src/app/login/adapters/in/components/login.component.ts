import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

import { LoginToolbarComponent } from "@app/login/adapters/in/components/login-toolbar/login-toolbar.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  standalone: true,
  imports: [LoginToolbarComponent, MatButtonModule]
})
export class LoginComponent {}
