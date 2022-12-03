import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataAnalyzerComponent } from './data-analyzer/data-analyzer/data-analyzer.component';


const routes: Routes = [
  { 
    path: '', 
    component: DataAnalyzerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataExploreRoutingModule { }
