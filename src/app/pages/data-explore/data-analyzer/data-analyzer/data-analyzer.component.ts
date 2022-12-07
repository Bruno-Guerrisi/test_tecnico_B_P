import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getAllDate } from 'src/app/models/get-all-date.model';
import { ApiMonitoringService } from 'src/app/service/api-monitoring.service';

/* for chart */
import { Chart, registerables } from 'chart.js';
import { ApiMonitoring } from 'src/app/models/api-monitoring.model';
Chart.register(...registerables)

@Component({
  selector: 'app-data-analyzer',
  templateUrl: './data-analyzer.component.html',
  styleUrls: ['./data-analyzer.component.scss']
})
export class DataAnalyzerComponent implements OnInit {

    /* container with all results + count: errors, calls, average time */
    ApiMonitorinResults: ApiMonitoring | null = null;
    totalCalls: number = 0;
    totalErrors: number = 0;
    responseTime: number = 0;

    /* useful arrays for chart generation */
    countDistributionValues: Array<number> = [];
    dateCallsOverTime: Array<string> = [];
    numberCallsOverTime: Array<number> = [];

    /* group of data */
    formGetDate: FormGroup | any;

    constructor(
        private FB: FormBuilder,
        private matSnackBar: MatSnackBar,
        private apiMonitoringService: ApiMonitoringService
    ) { }

    ngOnInit(): void {
        this.setupFormGetDate()
    }

    setupFormGetDate() {
        this.formGetDate = this.FB.group({
            startDate: [ '2021-07-20T09:01:01' , Validators.required],
            endDate: [ '2021-07-20T10:01:01' , Validators.required],
        })
    }

    /*  */
    formSubmit() {
        /* reset data */
        this.resetData()

        /* get form fields */
        const start = this.formGetDate.value.startDate;
        const end = this.formGetDate.value.endDate
        
        this.apiMonitoringService.getMonitoring(start, end).subscribe({
            next: (data: ApiMonitoring) => {

                /* save all result */
                this.ApiMonitorinResults = data

                /* variables for count calls e for each key*/
                let key1:number = 0;
                let key2:number = 0;
                let key3:number = 0;
                let key4:number = 0;
                let key5:number = 0;
                let key6:number = 0;

                /* get useful data */
                this.ApiMonitorinResults?.values.forEach(el => {

                    this.totalCalls+= el.total_requests
                    this.totalErrors+= el.total_errors
                    this.responseTime+= el.total_response_time_ms

                    /* get data for chart of calls made by time */
                    this.dateCallsOverTime.push(el.creation_datetime.replace(/T/g, " "))
                    this.numberCallsOverTime.push(el.total_requests)

                    /* group calls by key */
                    switch (el.key) {
                        case 1:
                            key1+= el.total_requests
                            break;
                        case 2:
                            key2+= el.total_requests
                            break;
                        case 3:
                            key3+= el.total_requests
                            break;
                        case 4:
                            key4+= el.total_requests
                            break;
                        case 5:
                            key5+= el.total_requests
                            break;
                        case 6:
                            key6+= el.total_requests
                            break;
                    }

                    
                });
                
                /* get average response time */
                this.responseTime = this.responseTime /this.totalCalls
                
                /* save count calls for each key */
                this.countDistributionValues.push( key1, key2, key3, key4, key5, key6)

                /* 
                * generate charts 
                */

                /* chart of total calls and errors */
                this.chartDonutSetup(
                    'calls-over-times-donut', 
                    this.totalErrors, 
                    (this.totalCalls - this.totalErrors),
                );


                /* chart of calls made by time */
                this.chartSetup(
                    'calls-over-times',
                    'line',
                    this.dateCallsOverTime,
                    this.numberCallsOverTime,
                    'Chiamata',
                );

                /* chart distribution of values for each key */
                this.chartSetup(
                    'errors-percentage',
                    'bar', 
                    ['Key 1','Key 2','Key 3','Key 4','Key 5','Key 6'],
                    this.countDistributionValues,
                    'Valore',
                );
                
            },
            error: (err: any) => {console.log(err)}
        })
    }
    
    errorsForm(){
        const message = "Gentilmente compilare tutti i campi."
        this.matSnackBar.open( message, undefined, { duration: 2000 } );
    }

    resetData(){

        /* reset all variables */
        this.ApiMonitorinResults = null;
        this.totalCalls = 0;
        this.totalErrors = 0;
        this.responseTime = 0;
        this.countDistributionValues = [];
        this.dateCallsOverTime = [];
        this.numberCallsOverTime = [];
    }

    /*
    * Chart sections
    */
    chartSetup(
        id:string, 
        type:any,
        labels: any,
        data: any,
        itemName:string,
    ){

        const myChart = new Chart( id, {

            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: itemName,
                    data: data,
                    backgroundColor: 'orange',
                    borderColor: [
                        'orange'
                    ],
                    borderWidth: 1
                    
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {

                    legend: {
                        position: 'top',

                        label:{

                            font: {
                                size: 16
                            }
                        }
                    },
                },
            }
        });

        /* get chart length and space between records */
        const chart = document.querySelector<HTMLElement>('.chart-body');
        const labelsCount = myChart.data.labels!.length;

        if (labelsCount > 7) {

            /* to increase the space between records change the number 35 */
            const myWidth = 700 + ((labelsCount - 7) * 35)
            chart!.style.width = `${myWidth}px`;
        }
    }

    chartDonutSetup(
        id:string, 
        errorsRes:string | number,
        successRes:string | number
    ){

        const myChart = new Chart( id, {

            type: 'doughnut',
            data: {
                labels: ['Errors', 'Success'],
                datasets: [{
                    
                    label: 'Chiamate',
                    data: [`${errorsRes}`, `${successRes}`],
                    backgroundColor: ['red', 'green'],
                      
                    
                }]
            },
            options: {
                responsive: true,

                plugins: {

                    legend: {
                        position: 'top',
                    }
                },
            }
        });
    }


}
