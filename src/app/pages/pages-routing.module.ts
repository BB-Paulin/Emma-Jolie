import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutsComponent} from "../layouts/layouts.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [

  {
    path: '',
    component: HomepageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
