import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMonitoringService {


    constructor(
        private http: HttpClient
    ) { }

    getMonitoring(start:string, end:string, page:string | number = 1):Observable<any> {

        let url = `/api/v1/retrieve?date_from=${start}&date_to=${end}&page=${page}`
        return this.http.get<any>(url)
    }
}
