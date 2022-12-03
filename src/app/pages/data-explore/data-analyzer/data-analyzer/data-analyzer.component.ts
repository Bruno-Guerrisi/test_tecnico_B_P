import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getAllDate } from 'src/app/models/get-all-date.model';

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
    ) { }

    ngOnInit(): void {
        this.setupFormGetDate()
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
        alert('submitted')
        console.log(this.formGetDate.value)
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


}
