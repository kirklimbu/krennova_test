import { VisitTabContainerComponent } from "./../visit-tab-container/visit-tab-container.component";
import { VisitDetailComponent } from "./pages/visit-detail/visit-detail.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: VisitTabContainerComponent,
    children: [

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitDetailRoutingModule {}
