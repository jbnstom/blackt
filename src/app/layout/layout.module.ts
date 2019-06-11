import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentsComponent } from './contents/contents.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContentsComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
