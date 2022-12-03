import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataAnalyzerComponent } from './pages/data-explore/data-analyzer/data-analyzer/data-analyzer.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    /* Form control */
    FormsModule,
    ReactiveFormsModule,

    /*
    * utility
    */
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    /*
    * shared components
    */
    SharedModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
