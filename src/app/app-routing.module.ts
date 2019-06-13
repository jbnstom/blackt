import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   loadChildren: './datasets/datasets/datasets.component#DatasetsModule'
  // }
//   {
//    path: '',
//    loadChildren: () => import('./datasets/datasets.module').then(mod => mod.DatasetsModule)
//  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
