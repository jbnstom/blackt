import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatasetsRoutingModule } from './datasets-routing.module';
import { DatasetsComponent } from './datasets/datasets.component';

@NgModule({
  declarations: [DatasetsComponent],
  imports: [
    CommonModule,
    DatasetsRoutingModule
  ]
})
export class DatasetsModule { }
