import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentsComponent} from './contents/contents.component';
// import {HeaderComponent} from './header/header.component';
// import {FooterComponent} from './footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: ContentsComponent,
    children: [
      { path: '',
       loadChildren: () => import('../datasets/datasets.module').then(mod => mod.DatasetsModule)
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
