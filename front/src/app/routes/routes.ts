import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "../home/home.component";


const AppRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent},
  { path: 'home/:username', component:  HomeComponent},
];
export const routes = RouterModule.forRoot(AppRoutes);
