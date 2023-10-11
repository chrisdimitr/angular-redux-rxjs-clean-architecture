import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotFoundError404Component } from "./not-found-error404.component";

const routes: Routes = [
  {
    path: "**",
    component: NotFoundError404Component
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundError404RoutingModule {}
