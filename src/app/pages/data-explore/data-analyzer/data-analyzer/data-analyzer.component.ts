import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getAllDate } from 'src/app/models/get-all-date.model';
import { ApiMonitoringService } from 'src/app/service/api-monitoring.service';

/* for chart */
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-data-analyzer',
  templateUrl: './data-analyzer.component.html',
  styleUrls: ['./data-analyzer.component.scss']
})
export class DataAnalyzerComponent implements OnInit {

    /* group of data */
    formGetDate: FormGroup | any;

    constructor(
        private FB: FormBuilder,
        private matSnackBar: MatSnackBar,
        private apiMonitoringService: ApiMonitoringService
    ) { }

    ngOnInit(): void {
        this.setupFormGetDate()

        this.chartSetup(
            'calls-over-times',
            'line', 
            'Chiamata', 
            'Chiamate nel tempo'
        );

        this.chartSetup(
            'errors-percentage',
            'bar', 
            'Valori', 
            'Distribuzione valori'
        );
        // this.chartSetup('errors-percentage','doughnut');

    }

    setupFormGetDate() {
        this.formGetDate = this.FB.group({
            startDate: [ '' , Validators.required],
            startHours: [ '' , Validators.required],
            startMinutes: [ '' , Validators.required],
            endDate: [ '' , Validators.required],
            endHours: [ '' , Validators.required],
            endMinutes: [ '' , Validators.required]

        })
    }

    /*  */
    formSubmit() {
        this.apiMonitoringService.getMonitoring().subscribe({
            next: (data: any) => {console.log(data)},
            error: (err: any) => {console.log(err)}
        })
    }
    
    errorsForm(){
        const message = "Gentilmente compilare tutti i campi."
        this.matSnackBar.open( message, undefined, { duration: 2000 } );
    }

    /* create a new array of the desired length */
    counter(start: number, end: number) {
        const array = [];
        for (let index = start; index <= end; index++) {
            array.push(index);
            
        }
        return array;
    }


    /*
    * Chart sections
    */
    chartSetup(
        id:string, 
        type:any, 
        itemName:string, 
        title:string
    ){

        const myChart = new Chart( id, {

            type: type,
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: itemName,
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'orange',
                    borderColor: [
                        'orange'
                    ],
                    borderWidth: 1
                    
                }]
            },
            options: {
                responsive: true,

                plugins: {

                    legend: {
                        position: 'top',

                        label:{

                            font: {
                                size: 16
                            }
                        }
                    },

                    title: {
                        display: true,
                        text: title,
                        font: {
                            size: 18
                        }
                    }
                },
            }
        });
    }


}
