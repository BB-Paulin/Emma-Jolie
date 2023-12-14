import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [

  {path: '',component: HomepageComponent, children: [
      {path: 'About',component: HomepageComponent},
  {path: 'Services',component: HomepageComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
