import { MainVisitComponent } from "./pages/main-visit/main-visit.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: MainVisitComponent,
  },
];

@NgModule({
  // imports: [RouterModule.forChild(routes)],
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: MainVisitComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class VisitsRoutingModule {}
