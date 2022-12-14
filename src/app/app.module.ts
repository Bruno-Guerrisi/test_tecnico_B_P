import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestInterceptor } from './shared/shared/interceptors/rest.interceptor';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [

        /* per le form control */
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
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RestInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
