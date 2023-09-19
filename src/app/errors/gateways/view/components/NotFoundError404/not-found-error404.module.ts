import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NotFoundError404Component } from "./not-found-error404.component";
import { NotFoundError404RoutingModule } from "./not-found-error-404-routing.module";

@NgModule({
  imports: [CommonModule, NotFoundError404RoutingModule, NotFoundError404Component]
})
export class NotFoundError404Module {}
