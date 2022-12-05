import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiMonitoringService {


    constructor(
        private http: HttpClient
    ) { }

    getMonitoring():Observable<Array<string>> {

        let url = `http://localhost:8000/api/v1/retrieve?date_from=2021-07-20T09:01:00&date_to=2021-07-20T15:21:00&page=1`
        return this.http.get<any>(url)
    }
}
