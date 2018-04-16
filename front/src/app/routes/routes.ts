import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "../pages/home/home.component";
import {ComparaisonComponent} from "../pages/comparaison/comparaison.component";


const AppRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent},
  { path: 'home/:username', component:  HomeComponent},
  { path: 'comparaison', component:  ComparaisonComponent},
];
export const routes = RouterModule.forRoot(AppRoutes);
