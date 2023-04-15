import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomesComponent } from './homes/homes.component';

const routes: Routes = [
  // This sets up the default route to the homes component
  // created homes component with route
  {
    path: 'homes',
    component: HomesComponent
  },
  // redirect to /homes
  {
    path: '',
    redirectTo: '/homes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
