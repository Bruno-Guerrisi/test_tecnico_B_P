import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class RestInterceptor implements HttpInterceptor {

  constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        req = req.clone( {

            /* set API key and value */
            setHeaders: {

                'x-api-key' : "BigProfiles-API",
            } 
        })
        return next.handle( req );
    }
}
