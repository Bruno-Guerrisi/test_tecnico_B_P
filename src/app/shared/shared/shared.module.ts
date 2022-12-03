import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header/header.component';
import { MaterialSharedModule } from './modules/material-shared.module';
import { RouterModule } from '@angular/router';

const components = [
  HeaderComponent
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
