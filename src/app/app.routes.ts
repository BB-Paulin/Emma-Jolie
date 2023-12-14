import { Routes } from '@angular/router';
import {LayoutsComponent} from "./layouts/layouts.component";

export const routes: Routes = [
  { path: '', component: LayoutsComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }
];
