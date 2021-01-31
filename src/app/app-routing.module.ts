import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsesComponent } from './components/uses/uses.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'uses', component: UsesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
