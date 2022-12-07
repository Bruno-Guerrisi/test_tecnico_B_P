import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header/header.component';
import { MaterialSharedModule } from './modules/material-shared.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';

const components = [
  HeaderComponent,
  FooterComponent,
  LoaderComponent,
]

const modules = [
  MaterialSharedModule
]


@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...modules,
  ],
  exports: [
    ...components,
    ...modules,
  ]
})
export class SharedModule { }
