import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAnalyzerComponent } from './data-analyzer/data-analyzer/data-analyzer.component';
import { DataExploreRoutingModule } from './data-explore-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DataAnalyzerComponent
  ],
  imports: [
    CommonModule,
    DataExploreRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DataExploreModule { }
